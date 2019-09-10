import { Table, Popconfirm, Button } from 'antd';
import styles from './MyCard.scss';
import { Card,Row,Col } from 'antd';

import ReactSVG from 'react-svg'

const MyCard = ({idleNumber, buildNumber ,osNumber, pyNumber, viNumber}) => {
  return(
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Building" bordered={false}>
           {buildNumber}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="idile" bordered={false}>
            {idleNumber}
        </Card>
      </Col>
      <Col span={8}>
        <div className='flex j-between a-center'>
          <div>{osNumber}</div>
          <div>{pyNumber}</div>
          <div>{viNumber}</div>
        </div>
      </Col>
    </Row>
  </div>
  )
};

export default MyCard;





