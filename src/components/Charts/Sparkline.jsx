import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const Sparkline = ({ currentColor, id, type, height, width, data, color }) => {
  return (
    <div>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,

          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}

      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>

    </div>
  )
}

export default Sparkline