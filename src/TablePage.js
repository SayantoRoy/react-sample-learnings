import { useState } from "react";
import { Table, Row, Col, Input, Button, Modal, Select } from "antd";
import "antd/dist/antd.css";
import "./Components/FilterModal";
import FilterModal from "./Components/FilterModal";

const TablePage = () => {
  const tableData = [
    {
      id: "1",
      docNo: "12675",
      module: "Inventory",
      severity: "High",
      AssignedTo: "Tom",
      AddedBy: "Sam",
    },
    {
      id: "2",
      docNo: "126",
      module: "Packing",
      severity: "Low",
      AssignedTo: "Rishv",
      AddedBy: "Sam",
    },
    {
      id: "3",
      docNo: "569",
      module: "Order Management",
      severity: "Moderate",
      AssignedTo: "Pran",
      AddedBy: "Tony",
    },
    {
      id: "4",
      docNo: "56987",
      module: "Logistics",
      severity: "High",
      AssignedTo: "Sumi",
      AddedBy: "Tony",
    },
    {
      id: "7",
      docNo: "8722",
      module: "Logistics",
      severity: "High",
      AssignedTo: "Sumi",
      AddedBy: "Sam",
    },
    {
      id: "8",
      docNo: "1898",
      module: "Logistics",
      severity: "Low",
      AssignedTo: "Tom",
      AddedBy: "Sam",
    },
    {
      id: "11",
      docNo: "1998",
      module: "Packing",
      severity: "Low",
      AssignedTo: "Gaurav",
      AddedBy: "Steve",
    },
    {
      id: "13",
      docNo: "202265",
      module: "Accounts",
      severity: "High",
      AssignedTo: "Judi",
      AddedBy: "Steve",
    },
    {
      id: "17",
      docNo: "4780",
      module: "Accounts",
      severity: "Low",
      AssignedTo: "Judi",
      AddedBy: "Aman",
    },
  ];

  const [value, setValue] = useState("");
  const [dataSource, setDataSource] = useState(tableData);
  const [tableFilterData, setTableFilterData] = useState([]);

  const filteringData = (e) => {
    if (e.target.value != "") {
      setValue(e.target.value);
      const filterTable = dataSource.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );

      setTableFilterData([...filterTable]);
    } else {
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  };

  const serviceRequestColumns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Doc No",
      dataIndex: "docNo",
      key: "docNo",
    },
    {
      title: "Module",
      dataIndex: "module",
      key: "module",
    },
    {
      title: "Severity",
      dataIndex: "severity",
      key: "severity",
    },
    {
      title: "Assigned To",
      dataIndex: "AssignedTo",
      key: "AssignedTo",
    },
    {
      title: "Added By",
      dataIndex: "AddedBy",
      key: "AddedBy",
    },
  ];

  //Setting of the Filter Options
  const [filterModalSearch, setFilterModalSearch] = useState("");
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [fill, setFill] = useState("");
  const [colValue, setColValue] = useState("");

  const showModal = () => {
    setIsFilterModalVisible(true);
  };

  const handleDone = () => {
    setIsFilterModalVisible(false);

    let col = "docNo";

    const filteredTable = dataSource.filter((o) =>
      String(o[colValue])
        .toLowerCase()
        .includes(filterModalSearch.toLowerCase())
    );
    if (filterModalSearch.length > 0) {
      setFill(filterModalSearch);
    }
    setTableFilterData(filteredTable);
  };

  const handleCancel = () => {
    setIsFilterModalVisible(false);
  };

  const handleChange = (e) => {
    setColValue(e);
  };

  const clearFilters = () => {
    //setFill('');
    setFilterModalSearch("");
    setColValue("");
  };

  // All the Code for the Create Request
  const [isCreateVisible, setIsCreateVisible] = useState(false);
  const handleCreateCancel = () => {
    setIsCreateVisible(false);
  };

  const handleCreateDone = () => {
    setIsCreateVisible(false);
  };

  const openCreateModal = () => {
    setIsCreateVisible(true);
  };

  return (
    <div style={{ margin: "50px" }}>
      <Row>
        <Input
          placeholder="Search"
          onChange={filteringData}
          style={{ width: "30%" }}
        />
        <Button type="text" onClick={showModal}>
          Filter
        </Button>

        <Button type="primary" onClick={openCreateModal}>
          Create
        </Button>
      </Row>
      {/* Filter Modal component to be made */}
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
          <Button onClick={clearFilters}>Clear Filters</Button>,
          <Button key="submit" type="primary" onClick={handleDone}>
            Ok
          </Button>,
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
                  style={{ width: "100%" }}
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

      {/* Modal For Creating a Serive New */}
      <Modal
        title="Create New Request"
        visible={isCreateVisible}
        closable={false}
        footer={false}
        style={{ minWidth: "90%", minHeight: "80%" }}
      >
        <Row className="h-full">
          <Col className="flex flex-col h-full" style={{ width: "100%" }}>
            <Row gutter={22}>
              <Col span={2}>
                <span>Doc No</span>
              </Col>
              <Col span={4}>
                <Input
                  placeholder="Search"
                  onChange={() => console.log(e.target.value)}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col span={2} offset={2}>
                Module
              </Col>
              <Col span={4}>
                <Select defaultValue="" style={{ width: "100%" }}>
                  <Option value="accounts">Accounts</Option>
                  <Option value="inventory">Inventory</Option>
                  <Option value="logistics">Logistics</Option>
                  <Option value="orderManagement">Order management</Option>
                  <Option value="packing">Packing</Option>
                </Select>
              </Col>
              <Col span={2} offset={2}>
                Severity
              </Col>
              <Col span={4}>
                <Select defaultValue="" style={{ width: "100%" }}>
                  <Option value="high">High</Option>
                  <Option value="moderate">Moderate</Option>
                  <Option value="low">Low</Option>
                </Select>
              </Col>
            </Row>
            <Row gutter={22} style={{ marginTop: "2%" }}>
              <Col span={2}>
                <span>Assigned To</span>
              </Col>
              <Col span={4}>
                <Input
                  placeholder="Search"
                  onChange={() => console.log(e.target.value)}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col span={2} offset={2}>
                <span>Assigned By</span>
              </Col>
              <Col span={4}>
                <Input
                  placeholder="Search"
                  onChange={() => console.log(e.target.value)}
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "2%" }}>
              <Button key="back" onClick={handleCreateCancel}>
                Go back
              </Button>
              <Button type="primary" onClick={handleCreateDone}>
                Save
              </Button>
            </Row>
          </Col>
        </Row>
      </Modal>

      <Table
        dataSource={
          value.length > 0 || fill.length > 0 ? tableFilterData : dataSource
        }
        columns={serviceRequestColumns}
        pagination={true}
        style={{ marginTop: "1%" }}
      />
    </div>
  );
};

export default TablePage;
