import { Box, Tab } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { Container, Title, Text, MUITabs } from "./styled";

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

export const AboutFranchise = () => {
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
          <Tab label="ABOUT US" {...a11yProps(0)} />
          <Tab label="OUR PRACTICE" {...a11yProps(1)} />
          <Tab label="PATIENT CARE" {...a11yProps(2)} />
        </MUITabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Title>HELP PEOPLE TO HELP YOU.</Title>
        <Text>
          At our Clinic, we have established successful partnerships with local
          clinics, practitioners, hospitals, and businesses, reaffirming our
          strong affinity for our community and dedication to its mental health
          goals. These relationships enable us to provide education,
          intervention, and the best possible treatment to individuals,
          families, and our entire community as a whole.
        </Text>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Title>MENTAL HEALTH NEEDS A DEAL OF ATTENTION.</Title>
        <Text>
          At our Clinic, we understand that everyone’s path to wellness looks
          differently as everyone heals in their own unique way. We believe that
          everyone who travels down this road to wellness deserves to have a
          voice and to be treated with respect and empowerment to make the
          decisions that are best for them. We sincerely believe in showing
          empathy towards individuals who seek out CARE and will work tirelessly
          with them and their family to find their successful path.
        </Text>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Title>WE ARE HERE TO HELP, NOT TO JUDGE.</Title>
        <Text>
          The driving force behind Illinois Behavioral Care Clinic is
          Compassion, Acceptance, Respect, Empowerment, and Sincerity. We
          demonstrate those, in part, by working with you to identify your
          mental health and recovery goals and by developing a treatment plan
          that is unique to you. We utilize a holistic approach to health by
          providing a wide range of therapies which are tailored to help you
          down your path to healing and recovery. Your mental health is your
          physical health, and we are here to help you be in the best health
          possible.
        </Text>
      </TabPanel>
    </Container>
  );
};
