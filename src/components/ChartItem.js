/**
 * Created by phuongla on 9/13/2017.
 */
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class ChartItem extends Component {

    render () {
        const { data, color } = this.props;
        return (
            <div>
                <Sparklines data={data} width={180} height={120}>
                    <SparklinesLine color={color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
            </div>
        );
    }
}

export default ChartItem;