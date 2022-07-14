import Table from '../components/Table/Table';
import AddWord from '../components/Table/AddWord';

import styles from '../assets/styles/Components/containers.module.scss';

const TablePage = () => (
  <div className={styles.wrapperV}>
    <AddWord />
    <Table />
  </div>
);
export default TablePage;
