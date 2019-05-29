import React, {Component} from 'react';
import {Timeline, Icon} from 'antd'


export default class ProjectTimeline extends Component {
    render() {
        return (
            <Timeline>
                <Timeline.Item color="green"><p><strong>April 2018:</strong> Team Formation</p></Timeline.Item>
                <Timeline.Item color="green" dot={<Icon type="experiment" style={{fontSize: '20px'}}/>}><p><strong>April-June:</strong> Initial Research</p></Timeline.Item>
                <Timeline.Item color="green" dot={<Icon type="rocket" style={{fontSize: '20px'}}/>}><p><strong>July:</strong> Obtain L1 & L2 Certifications</p></Timeline.Item>
                <Timeline.Item color="green" dot={<Icon type="tool" style={{fontSize: '20px'}}/>}><p><strong>July:</strong> Build Competition Prototype</p></Timeline.Item>
                <Timeline.Item color="green" dot={<Icon type="rocket" style={{fontSize: '20px'}}/>}>
                <p><strong>Aug:</strong> Prototype Test Flight</p>
                <ul style={{textAlign:'left'}}>
                    <li>Max-Speed: 200 m/s</li>
                    <li>Max-G: 10 g's</li>
                    <li>Apogee: 1400m</li>
                </ul>
                </Timeline.Item>
                <Timeline.Item color="green" dot={<Icon type="profile" style={{fontSize: '20px'}} />}>
                <p><strong>Oct:</strong> 1st Progress Update Oct</p>
                </Timeline.Item>
                <Timeline.Item color="green" dot={<Icon type="rocket" style={{fontSize: '20px'}}/>}>
                <p><strong>Oct:</strong> Competition Test Flight</p>
                <ul style={{textAlign:'left'}}>
                    <li>Max-Speed: 290 m/s</li>
                    <li>Max-G: 15 g's</li>
                    <li>Apogee: 2860m</li>
                </ul>
                </Timeline.Item>
                <Timeline.Item color="green" dot={<Icon type="profile" style={{fontSize: '20px'}} />}>
                <p><strong>Dec:</strong> 2nd Progress Update</p>
                </Timeline.Item>
                <Timeline.Item color="green" dot={<Icon type="book" style={{fontSize: '20px'}}/>}>
                <p><strong>March 2019:</strong> Technical Report</p>
                </Timeline.Item>
                <Timeline.Item color='green' dot={<Icon type="rocket" style={{fontSize: '20px'}}/>}>
                <p><strong>April:</strong> Competition Launch</p>
                </Timeline.Item>
            </Timeline>
        )
    }
}