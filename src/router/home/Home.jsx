import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import intl from 'react-intl-universal';

import './Home.less';

import EtmHeader from '../../components/header/Header';
import EtmFooter from '../../components/footer';
import EtmBanner from '../../components/home-banner';
import Section1 from '../../components/home-section1';
import Section2 from '../../components/home-section2';
import Section3 from '../../components/home-section3';
import Section4 from '../../components/home-section4';
import Section5 from '../../components/home-section5';
import Section6 from '../../components/home-section6';
import Section7 from '../../components/home-section7';

const { Header, Content, Footer } = Layout;

class Home extends React.Component {
    // constructor(props, context) {
    //     super(props, context);
    // }

    // componentWillMount() {
    //     window.scrollTo(0, 0);
    // }

    render() {
        return (
            <Layout className="home_layout">
                <Header className="home_header">
                    <EtmHeader />
                </Header>
                <Content className="home_content">
                    {/* <EtmBanner />
                    <Section1 history={this.props.history} />
                    <Section2 history={this.props.history} />
                    <Section3 history={this.props.history} />
                    <Section4 history={this.props.history} />
                    <Section5 history={this.props.history} />
                    <Section6 history={this.props.history} />
                    <Section7 history={this.props.history} /> */}
                </Content>
                <Footer className="home_footer">
                    <EtmFooter />
                </Footer>
            </Layout>
        )
    }
}

export default Home;