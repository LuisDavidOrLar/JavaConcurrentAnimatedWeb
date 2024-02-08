import React, { useState, useEffect } from 'react';
import { Client } from '@stomp/stompjs';
import { useSpring, animated } from 'react-spring';
import { useTransition, animated as a } from 'react-spring';


const AnimatedCircle = ({ value, max }) => {
  const svgSize = 100; // New SVG dimensions
  const circleRadius = 40; // New radius for the circle

  const percentage = value / max;
  const strokeDasharray = 2 * Math.PI * circleRadius;
  const animationProps = useSpring({
    strokeDashoffset: strokeDasharray * (1 - percentage),
    from: { strokeDashoffset: strokeDasharray },
  });


  return (
    <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>
      <circle cx={svgSize / 2} cy={svgSize / 2} r={circleRadius} fill="none" stroke="#ddd" strokeWidth="5" />
      <animated.circle
        cx={svgSize / 2}
        cy={svgSize / 2}
        r={circleRadius}
        fill="none"
        stroke="#007bff"
        strokeWidth="5"
        strokeDasharray={strokeDasharray}
        style={animationProps}
        transform={`rotate(-90 ${svgSize / 2} ${svgSize / 2})`} />
      <text x="50%" y="50%" textAnchor="middle" fill="#333" dy=".3em">{value}</text>
    </svg>
  );
};


const AtomicIntegersWebSocket = () => {
    const [atomicIntegers, setAtomicIntegers] = useState([]);

    const client = new Client({
        brokerURL: 'ws://localhost:8080/ws',
        onConnect: () => {
            client.subscribe('/topic/atomicIntegers', (message) => {
                setAtomicIntegers(JSON.parse(message.body));
            });
        },
        debug: (str) => {
            console.log(str);
        },
    });
// eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        client.activate();

        const handleNavbarAction = (event) => {
            const { actionType } = event.detail;
            if (actionType === 'increment') {
                incrementCounters();
            } else if (actionType === 'reset') {
                resetCounters();
            }
        };

        window.addEventListener('navbar-action', handleNavbarAction);

        return () => {
            window.removeEventListener('navbar-action', handleNavbarAction);
            client.deactivate();
        };
    }, []); // Dependencies array is empty to ensure this effect runs only once on mount

    const incrementCounters = () => {
        if (client.active) {
            client.publish({ destination: '/app/incrementCounters' });
        } else {
            console.error("The STOMP client is not connected.");
            client.activate();
        }
    };

    const resetCounters = () => {
        if (client && client.active) {
            client.publish({ destination: '/app/resetCounters' });
        } else {
            console.error("STOMP client is not connected.");
            client.activate();
        }
    };

    const transitions = useTransition(atomicIntegers, {
      from: { opacity: 0, transform: 'scale(0.5)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0)' },
      keys: atomicIntegers.map((_, index) => index),
    });

    return (
        <div className="w-1/2 h-full bg-[#121212] flex items-center justify-center">
            <div className="ml-96">

            {transitions((style, item, _, index) => (
      <animated.div key={index} style={style}>
        <AnimatedCircle value={item} max={Math.max(...atomicIntegers)} />
      </animated.div>
    ))}


            </div>
        </div>
    );
};

export default AtomicIntegersWebSocket;


