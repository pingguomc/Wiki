import React, { useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import './HistoryTimeline.css';

const HistoryTimeline = ({ events }) => {
    const [visibleEvents, setVisibleEvents] = useState([]);
    const [isAscending, setIsAscending] = useState(false); // 默认倒序（最新在前）

    // 按日期排序事件（核心逻辑）
    const sortedEvents = useMemo(() => {
        // 复制并排序事件数组（避免修改原数据）
        return [...events].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return isAscending ? dateA - dateB : dateB - dateA;
        });
    }, [events, isAscending]);

    // 监听滚动，更新可见性
    useEffect(() => {
        const handleScroll = () => {
            const newVisible = sortedEvents.map((_, index) => {
                const element = document.getElementById(`timeline-item-${index}`);
                if (!element) return false;

                const rect = element.getBoundingClientRect();
                return rect.top < window.innerHeight * 0.85; // 当元素进入视口85%时视为可见
            });
            setVisibleEvents(newVisible);
        };

        handleScroll(); // 初始检查
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sortedEvents]); // 排序变化时重新监听

    // 切换排序方向
    const toggleOrder = () => {
        setIsAscending(!isAscending);
        setVisibleEvents([]); // 重置可见性，触发重新计算
    };

    return (
        <div className="timeline-container">
            {/* 排序切换按钮 */}
            <button
                className="timeline-toggle"
                onClick={toggleOrder}
            >
                {isAscending ? '切换为 最新在前' : '切换为 最早在前'}
            </button>

            {/* 中央轴线 */}
            <div className="timeline-axis"></div>

            {/* 排序后的事件列表 */}
            {sortedEvents.map((event, index) => (
                <div
                    key={`${event.date}-${event.title}`} // 使用唯一标识避免排序后key冲突
                    id={`timeline-item-${index}`}
                    className={clsx(
                        'timeline-item',
                        // 排序后左右交替显示（保持视觉平衡）
                        index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right',
                        visibleEvents[index] ? 'visible' : ''
                    )}
                >
                    <div className="timeline-content">
                        <div className="timeline-date">{event.date}</div>
                        <h3 className="timeline-title">{event.title}</h3>
                        <div className="timeline-description">{event.description}</div>
                    </div>
                    <div className="timeline-dot"></div>
                </div>
            ))}
        </div>
    );
};

export default HistoryTimeline;