import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import intl from 'react-intl-universal';
import './Home.less';
// const { Header, Content, Footer } = Layout;
import Header from '../../components/header/Header';
// import Footer from '../../components/footer';
// import Banner from '../../components/home-banner';
// import Section1 from '../../components/home-section1';
// import Section2 from '../../components/home-section2';
// import Section3 from '../../components/home-section3';
// import Section4 from '../../components/home-section4';
// import Section5 from '../../components/home-section5';
// import Section6 from '../../components/home-section6';
// import Section7 from '../../components/home-section7';

class Home extends React.Component {
    // constructor(props, context) {
    //     super(props, context);
    // }

    // componentWillMount() {
    //     window.scrollTo(0, 0);
    // }

    render() {
        return (
            <div className={this.props.className}>
                <Header />
                {/* <Banner />
                <Section1 history={this.props.history}/>
                <Section2 history={this.props.history}/>
                <Section3 history={this.props.history}/>
                <Section4 history={this.props.history}/>
                <Section5 history={this.props.history}/>
                <Section6 history={this.props.history}/>
                <Section7 history={this.props.history}/>
                <Footer /> */}
            </div>
        );
    }
    // render() {
    //     return (
    //         <Layout className="layout">
    //             <Header>
    //                 <div className="logo" />
    //                 {/* <Menu
    //                     theme="dark"
    //                     mode="horizontal"
    //                     defaultSelectedKeys={['2']}
    //                     style={{ lineHeight: '64px' }}
    //                 >
    //                     <Menu.Item key="1">nav 1</Menu.Item>
    //                     <Menu.Item key="2">nav 2</Menu.Item>
    //                     <Menu.Item key="3">nav 3</Menu.Item>
    //                 </Menu> */}
    //                 <Menu
    //                     mode="horizontal"
    //                     theme="dark"
    //                     // onClick={(...args) => { this.onMenuItemClick(...args) }}
    //                     // onSelect={(...args) => { this.onMenuItemSelect(...args) }}
    //                     // selectedKeys={this.selectedKeys.length <= 0 ? [] : this.selectedKeys} 
    //                     >
    //                     <Menu.SubMenu title={intl.get('UNDERSTAND')}>
    //                         <Menu.Item key='knownledge-1'>{intl.get('INTRODUCTION')}</Menu.Item>
    //                         <Menu.Item key='knownledge-2'>{intl.get('SHD_COMPLETENESS')}</Menu.Item>
    //                         <Menu.Item key='knownledge-3'>{intl.get('EQUILIBRIUM')}</Menu.Item>
    //                     </Menu.SubMenu>
    //                     <Menu.SubMenu title={intl.get('CONSENSUS')}>
    //                         <Menu.Item key='consensus-1'>{intl.get('KANTOROVICH_CONSENSUS')}</Menu.Item>
    //                         <Menu.Item key='consensus-2'>{intl.get('CONCEPTUAL')}</Menu.Item>
    //                     </Menu.SubMenu>
    //                     <Menu.SubMenu title={intl.get('ECOSYSTEM')}>
    //                         <Menu.Item key='ecosystem-1'>{intl.get('CENTRA-DERIVED_CHAINS')}</Menu.Item>
    //                         <Menu.Item key='ecosystem-2'>{intl.get('PARALLEL_CHAIN')}</Menu.Item>
    //                         <Menu.Item key='ecosystem-3'>{intl.get('CHAIN_ADAPTOR')}</Menu.Item>
    //                         <Menu.Item key='ecosystem-4'>{intl.get('SAMRT_CONTRACT')}</Menu.Item>
    //                         <Menu.Item key='ecosystem-5'>{intl.get('MILL_MALL')}</Menu.Item>
    //                     </Menu.SubMenu>
    //                     <Menu.Item key='moore'>{intl.get('MOORE_ECONOMICS')}</Menu.Item>
    //                     <Menu.Item key='documents' >{intl.get('DOCUMENTS')}</Menu.Item>
    //                 </Menu>
    //             </Header>
    //             <Content style={{ padding: '0 50px' }}>
    //                 <Breadcrumb style={{ margin: '16px 0' }}>
    //                     <Breadcrumb.Item>Home</Breadcrumb.Item>
    //                     <Breadcrumb.Item>List</Breadcrumb.Item>
    //                     <Breadcrumb.Item>App</Breadcrumb.Item>
    //                 </Breadcrumb>
    //                 <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    //             </Content>
    //             <Footer style={{ textAlign: 'center' }}>
    //                 Ant Design ©2016 Created by Ant UED
    //             </Footer>
    //         </Layout>
    //     )
    // }
}

Home.defaultProps = {
    className: 'home',
}

export default Home;