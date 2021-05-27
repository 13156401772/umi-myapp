import styles from './index.less';
import { request } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}

IndexPage.getInitialProps = (async () => {
  // 使用proxy代理，刷新页面报错
  request('/api/parks').then( res => {
    console.log('res',res);
  })

  //使用具体地址，不会报错
  // request('http://192.168.3.40:8888/api/parks').then( res => {
  //   console.log('res',res);
  // })

  return Promise.resolve({
    data: {
      title: 'Hello World',
    }
  })
});
