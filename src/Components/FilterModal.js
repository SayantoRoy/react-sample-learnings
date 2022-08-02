import React from "react";
import { Table , Row , Col, Input, Button } from "antd";
import 'antd/dist/antd.css';


const FilterModal = () =>{

    return (
        <Modal
        title="Basic Modal"
        visible={isFilterModalVisible}
        onOk={handleDone}
        onCancel={handleCancel}
        style={{ top: 20 }}
        footer={[
          <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button onClick={clearFilters}>
          Clear Filters
          </Button>,
        <Button key="submit" type="primary"  onClick={handleDone}>
        Ok
      </Button>
      ]}
      >
        <Row>
          {/* <Col span={24}>
            <Input
              placeholder="Filter based on Document No"
              value={filterModalSearch}
              onChange={(e) => setFilterModalSearch(e.target.value)}
              //style={{ width: "60%" }}
            />
          </Col> */}

          <Col span={24} style={{ marginTop: "5%" }}>
            <Row>
              <Col span={11}>
                <Select
                  defaultValue=""
                  style={{ width: '100%' }}
                  onChange={handleChange}
                >
                  <Option value="docNo">Doc No</Option>
                  <Option value="module">Module</Option>
                  <Option value="severity">Severity</Option>
                </Select>
              </Col>
              <Col span={11} offset={2}>
                <Input
                  placeholder="Filter Value"
                  value={filterModalSearch}
                  onChange={(e) => setFilterModalSearch(e.target.value)}
                  //style={{ width: "60%" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>

    )

}

export default FilterModal;