'use client'
import React, { useState } from 'react';

function Features() {
  const [expandedFeatures, setExpandedFeatures] = useState({});

  const toggleFeature = (index) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const featuresData = [
    {
      title: 'Performance',
      items: [
        { label: 'Power', value: 'RWD 220 kW (295 hp)' },
        { label: 'Torque', value: '400 Nm (295 lb-ft)' },
        { label: 'Acceleration', value: '5.3 sec 0-100 km/h' },
        { label: 'Max speed', value: '210 km/h (130 mph)' },
      ],
    },
    {
      title: 'Battery',
      items: [
        { label: 'Capacity', value: '73.6 kWh total' },
        { label: 'Tech', value: 'Li-ion LFP battery (400V type)' },
        { label: 'Range', value: '668 km CLTC' },
        { label: 'Recuperation', value: 'Yes' },
        { label: 'Heat pump', value: 'Yes' },
      ],
    },
    {
      title: 'Body',
      items: [
        { label: 'Type', value: '4 door sedan, 5 seats' },
        { label: 'Platform', value: 'Modena' },
        { label: 'Dimensions', value: '4997 x 1963 x 1455 mm (196.7 x 77.3 x 57.3 in)' },
        { label: 'Drag coef', value: '0.195 Cd' },
        { label: 'Wheelbase', value: '3000 mm (118.1 in)' },
        { label: 'Weight', value: 'EU: 1980 kg unladen' },
        { label: 'Suspension', value: 'Adaptive Air suspension' },
        { label: 'Wheels', value: 'R19, R20' },
        { label: 'Trunk', value: 'EU: 517 l' },
        { label: 'Frunk', value: '105 l' },
        { label: 'Towing', value: 'Yes' },
      ],
    },
    {
      title: 'Displays',
      items: [
        { label: 'Center', value: '16.1" touchscreen' },
        { label: 'Driver\'s', value: '7.1"' },
        { label: 'Head-up', value: 'Yes' },
      ],
    },
    {
      title: 'Comfort',
      items: [
        { label: 'Seats', value: 'Heated and ventilated front seats' },
        { label: 'Roof', value: 'Panoramic glass sunroof' },
        { label: 'Parking aids', value: 'Front and rear sensors, 360 camera, reversing camera, Automatic Parking Assistance System' },
      ],
    },
    {
      title: 'Safety',
      items: [
        { label: 'Airbags', value: 'Front, side, rear, head airbag system' },
        { label: 'Driving aids', value: '1 LiDAR, 3 mmWave radars, 11 cameras, 12 sensors. Forward/Rear/Lateral Collision Prevention, Lane Centering, Lane Change Assist, Lane Departure Warning, Emergency braking with pedestrian and cyclist monitoring, High beam Assist, Blind Spot Alert, Door Open Warning' },
        { label: 'Self driving', value: 'Autonomous driving system' },
      ],
    },
  ];
  

  return (
    <div className="features-wraper">
      {featuresData.map((feature, index) => (
        <div className="feature" key={index}>
          <div className="flex">
            <div className="ico">
              <i className="uil uil-arrow-down-right" />
            </div>
            <h5>{feature.title}</h5>
          </div>
          <div className="list">
            {feature.items.map((item, itemIndex) => (
              <div
                className={`flex item ${
                  expandedFeatures[index] || itemIndex < 3 ? '' : 'hidden'
                }`}
                key={itemIndex}
              >
                <p>{item.label}</p>
                <h3>{item.value}</h3>
              </div>
            ))}
            <button className="load-more" onClick={() => toggleFeature(index)}>
              {expandedFeatures[index] ? 'Show less' : 'View more'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
