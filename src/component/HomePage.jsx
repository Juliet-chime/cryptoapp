import React from "react";
import millify from "millify";
import { Typography,Row,Col,Statistic } from "antd";
import {useGetCryptosQuery} from "../services/cryptoApi"
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const {Title} = Typography

const HomePage = () => {
    const {data, isFetching} = useGetCryptosQuery(10)

    if (isFetching) return "Loading...";
    const globalStat = data?.data?.stats
   
  return <>
  <Title level={2} className="heading">Global CryptoStats</Title>
  <Row>
      <Col span={12}>
          <Statistic title="Total Cryptocurrency" value={globalStat?.total}/>
      </Col>
      <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStat?.totalExchanges)}/>
      </Col>
      <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStat?.totalMarketCap)}/>
      </Col>
      <Col span={12}>
          <Statistic title="Total 24 Volume" value={millify(globalStat?.total24hVolume)}/>
      </Col>
      <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStat?.totalMarkets)}/>
      </Col>
  </Row>
  <div className="home-heading-container">
      <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
      <Title level={2} className="show-more"> <Link to="/cryptocurrencies">show more</Link></Title>
  </div>
  <Cryptocurrencies simpilified/>
  <div className="home-heading-container">
      <Title level={2} className="home-title">Latest Crypto news</Title>
      <Title level={2} className="show-more"> <Link to="/news">show more</Link></Title>
  </div>
  <News simpilified/>
  </>;
};

export default HomePage;
