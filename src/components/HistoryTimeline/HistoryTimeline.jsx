import React, { useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import './HistoryTimeline.css';

const HistoryTimeline = ({ events }) => {
    const [visibleEvents, setVisibleEvents] = useState([]);
    const [isAscending, setIsAscending] = useState(false);

    const sortedEvents = useMemo(() => {
        return [...events].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return isAscending ? dateA - dateB : dateB - dateA;
        });
    }, [events, isAscending]);

    useEffect(() => {
        const handleScroll = () => {
            const newVisible = sortedEvents.map((_, index) => {
                const element = document.getElementById(`timeline-item-${index}`);
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top < window.innerHeight * 0.85;
            });
            setVisibleEvents(newVisible);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sortedEvents]);

    const toggleOrder = () => {
        setIsAscending(!isAscending);
        setVisibleEvents([]);
    };

    return (
        <div className="rsmc-timeline">
            <button
                className="rsmc-timeline__toggle"
                onClick={toggleOrder}
            >
                {isAscending ? '切换为 最新在前' : '切换为 最早在前'}
            </button>

            <div className="rsmc-timeline__axis"></div>

            {sortedEvents.map((event, index) => (
                <div
                    key={`${event.date}-${event.title}`}
                    id={`timeline-item-${index}`}
                    className={clsx(
                        'rsmc-timeline__item',
                        index % 2 === 0 ? 'rsmc-timeline__item--left' : 'rsmc-timeline__item--right',
                        visibleEvents[index] ? 'visible' : ''
                    )}
                >
                    <div className="rsmc-timeline__content">
                        <div className="rsmc-timeline__date">{event.date}</div>
                        <h3 className="rsmc-timeline__title">
                            {event.url ? (
                                <a
                                    href={event.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rsmc-timeline__title-link"
                                >
                                    {event.title}
                                </a>
                            ) : (
                                event.title
                            )}
                        </h3>
                        <div className="rsmc-timeline__description">{event.description}</div>
                    </div>
                    <div className="rsmc-timeline__dot"></div>
                </div>
            ))}
        </div>
    );
};

export default HistoryTimeline;