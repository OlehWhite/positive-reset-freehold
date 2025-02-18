import { Box, Tab } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { Container, Title, Text, MUITabs, Link, BoxText } from "./style";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const RatesSurprise = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MUITabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="NO SURPRISE ACT" {...a11yProps(0)} />
          <Tab label="PROTECTING CONSUMERS" {...a11yProps(1)} />
        </MUITabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Title>HELP PEOPLE TO HELP YOU.</Title>
        <BoxText>
          <ul>
            <li>
              You Have the Right to Receive a Good Faith Estimate of Expected
              Charges under the No Surprises Act
            </li>
            <li>
              You have the right to receive a “Good Faith Estimate” explaining
              how much your medical care will cost for any non-emergency items
              or services. Under the law, health care providers need to give
              patients who don’t have insurance or who are not using insurance
              an estimate of the bill for medical items and services.
            </li>
            <li>
              If you are a self-pay patient, we will provide you with a Good
              Faith Estimate in writing through the patient portal at least 1
              business day prior to your appointment. You can call us or email
              us to request self-pay rates before you schedule an appointment.
            </li>
            <li>
              If you receive a bill that is $400 or more than your Good Faith
              Estimate per date of service, you can dispute the bill. Email us
              with a copy or picture of the Good Faith Estimate and your bill
              from us for prompt resolution.
            </li>
            <li>
              Make sure to save a copy or picture of your Good Faith Estimate
            </li>
          </ul>
        </BoxText>
        <Text style={{ color: "black", fontWeight: 600 }}>
          FOR QUESTIONS OR MORE INFORMATION ABOUT YOUR RIGHT TO A GOOD FAITH
          ESTIMATE, VISIT WWW.CMS.GOV/NOSURPRISES.
        </Text>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Title>MENTAL HEALTH NEEDS A DEAL OF ATTENTION.</Title>
        <Text>
          As of January 1, 2022, consumers have new billing protections when
          getting emergency care, non-emergency care from{" "}
          <Link
            href="https://www.cms.gov/glossary/out-network-providers"
            target="_blank"
          >
            {" "}
            out-of-network providers{" "}
          </Link>{" "}
          at{" "}
          <Link
            href="https://www.cms.gov/glossary/network-providers"
            target="_blank"
          >
            {" "}
            in-network{" "}
          </Link>{" "}
          facilities, and air ambulance services from out-of-network providers.
          Through new rules aimed to protect consumers, excessive out-of-pocket
          costs are restricted, and emergency services must continue to be
          covered without any prior authorization, and regardless of whether or
          not a provider or facility is in-network.
        </Text>
        <Text>
          Previously, if consumers had health coverage and got care from an
          out-of-network provider, their health plan usually wouldn’t cover the
          entire out-of-network cost. This left many with higher costs than if
          they’d been seen by an in-network provider. This is especially common
          in an emergency situation, where consumers might not be able to choose
          the provider. Even if a consumer goes to an in-network hospital, they
          might get care from out-of-network providers at that facility.
        </Text>
        <Text>
          In many cases, the out-of-network provider could bill consumers for
          the difference between the charges the provider billed, and the amount
          paid by the consumer’s health plan. This is known as{" "}
          <Link
            href="https://www.cms.gov/glossary/balance-billing-surprise-bills"
            target="_blank"
          >
            {" "}
            balance billing
          </Link>
          . An unexpected balance bill is called a surprise bill.
        </Text>
        <Text>
          he Consolidated Appropriations Act of 2021 was enacted on December 27,
          2020 and contains many provisions to help protect consumers from
          surprise bills, including the No Surprises Act under title I and
          Transparency under title II. Learn more about{" "}
          <Link
            href="https://www.cms.gov/nosurprises/consumers/new-protections-for-you"
            target="_blank"
          >
            protections for consumers
          </Link>
          ,{" "}
          <Link
            href="https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance"
            target="_blank"
          >
            understanding costs in advance{" "}
          </Link>
          to avoid surprise bills, and what happens when
          <Link
            href="https://www.cms.gov/nosurprises/consumers/payment-disagreements"
            target="_blank"
          >
            {" "}
            payment disagreements{" "}
          </Link>{" "}
          arise after receiving medical care.
        </Text>
      </TabPanel>
    </Container>
  );
};
