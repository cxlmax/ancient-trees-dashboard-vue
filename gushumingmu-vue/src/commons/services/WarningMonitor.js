/**
 * 警报监控服务
 * 定期检查后台API，在检测到警报时触发回调函数
 */

import axios from 'axios';

class WarningMonitor {
  constructor() {
    this.isMonitoring = false;
    this.intervalId = null;
    this.callbacks = [];
    this.warningStatus = false;
  }

  /**
   * 开始监控
   * @param {number} interval - 检查间隔时间（毫秒）
   */
  startMonitoring(interval = 10000) {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    this.checkWarning(); // 立即执行一次检查
    
    // 设置定时器定期检查
    this.intervalId = setInterval(() => {
      this.checkWarning();
    }, interval);
    
    console.log('警报监控服务已启动，检查间隔:', interval, 'ms');
  }

  /**
   * 停止监控
   */
  stopMonitoring() {
    if (!this.isMonitoring) return;
    
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isMonitoring = false;
    console.log('警报监控服务已停止');
  }

  /**
   * 检查警报状态
   */
  async checkWarning() {
    try {
      const response = await axios.get('http://183.134.89.178:8090/api/iswarning');
      const data = response.data;
      
      if (Array.isArray(data) && data.length > 0) {
        const warningItem = data[0];
        const newWarningStatus = warningItem.iswarning === '1';
        
        // 如果警报状态发生变化，触发回调
        if (newWarningStatus !== this.warningStatus) {
          this.warningStatus = newWarningStatus;
          this.notifyCallbacks(this.warningStatus);
        }
      }
    } catch (error) {
      console.error('检查警报状态失败:', error);
    }
  }

  /**
   * 注册警报状态变化的回调函数
   * @param {Function} callback - 回调函数，接收警报状态作为参数
   */
  onWarningChange(callback) {
    if (typeof callback === 'function' && !this.callbacks.includes(callback)) {
      this.callbacks.push(callback);
    }
    return this; // 支持链式调用
  }

  /**
   * 移除回调函数
   * @param {Function} callback - 要移除的回调函数
   */
  removeCallback(callback) {
    const index = this.callbacks.indexOf(callback);
    if (index !== -1) {
      this.callbacks.splice(index, 1);
    }
    return this; // 支持链式调用
  }

  /**
   * 通知所有回调函数
   * @param {boolean} status - 警报状态
   */
  notifyCallbacks(status) {
    this.callbacks.forEach(callback => {
      try {
        callback(status);
      } catch (error) {
        console.error('执行警报回调函数出错:', error);
      }
    });
  }

  /**
   * 获取当前警报状态
   * @returns {boolean} 警报状态
   */
  getWarningStatus() {
    return this.warningStatus;
  }
}

// 创建单例实例
const warningMonitor = new WarningMonitor();

export default warningMonitor;
