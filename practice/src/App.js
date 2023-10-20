import { useState } from "react";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import tabs from "./data";

const LOCALSTORAGE_KEY = "rigood_TIL_react_tabIndex";

export default function App() {
  const [tabIndex, setTabIndex] = useState(
    +localStorage.getItem(LOCALSTORAGE_KEY) ?? 0
  );

  const handleTabIndex = (index) => {
    localStorage.setItem(LOCALSTORAGE_KEY, index);
    setTabIndex(index);
  };

  return (
    <RecoilRoot>
      <GlobalStyles />
      <Layout>
        <Nav>
          <TabList>
            {tabs.map((tab, index) => (
              <Tab
                key={tab.title}
                $active={tabIndex === index}
                onClick={() => handleTabIndex(index)}
              >
                <span>{tab.title}</span>
                <TagList>
                  {tab.tags.map((tag, index) => (
                    <Tag key={tag}>
                      {tag}
                      {index + 1 !== tab.tags.length && ","}
                    </Tag>
                  ))}
                </TagList>
              </Tab>
            ))}
          </TabList>
        </Nav>
        <Main>{tabs[tabIndex].component}</Main>
      </Layout>
    </RecoilRoot>
  );
}

const Layout = styled.div`
  position: relative;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  min-height: 100vh;
  overflow-y: auto;
  padding: 10px 0;
  background-color: #fafafa;
  border-right: 1px solid lightgray;
`;

const TabList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Tab = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;

  span {
    font-size: 16px;
    font-weight: ${({ $active }) => $active && "bold"};
    color: ${({ $active }) => $active && "dodgerblue"};
    word-break: keep-all;
    cursor: pointer;
  }

  @media screen and (hover: hover) and (pointer: fine) {
    span:hover {
      text-decoration: ${({ $active }) => ($active ? "none" : "underline")};
    }
  }
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Tag = styled.li`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
  color: silver;
`;

const Main = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 300px;
  width: calc(100% - 300px);
  overflow-y: auto;
`;
