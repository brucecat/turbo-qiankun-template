import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <h2>umi 子应用</h2>
      <ul>
        <li>
          <Link to="/">list</Link>
        </li>
        <li>
          <Link to="/detail">detail</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
