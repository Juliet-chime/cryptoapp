import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Row, Card, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simpilified }) => {
  const count = simpilified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [crypto, setCrypto] = useState();
  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    const filtered = cryptosList?.data?.coins?.filter((coin) =>
      coin?.name.toLowerCase().includes(searchTerms.toLowerCase())
    );
    setCrypto(filtered);
  }, [cryptosList, searchTerms]);

  if (isFetching) return "Loading..";

  return (
    <>
     {!simpilified && ( <div className="search-crypto">
        <Input
          placeholder="search crypto"
          onChange={(e) => setSearchTerms(e.target.value)}
        />
      </div>)}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {crypto?.map((item) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={item?.id}>
            <Link key={item.uuid} to={`/crypto/${item.uuid}`}>
              <Card
                title={`${item?.rank}. ${item.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={item?.iconUrl}
                    alt={item?.name}
                  />
                }
                hoverable
              >
                <p>Price: {millify(item?.price)}</p>
                <p>MarketCap: {millify(item?.marketCap)}</p>
                <p>Daily change: {millify(item?.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
