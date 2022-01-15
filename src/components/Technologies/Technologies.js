import React from 'react';
import { DiCode, DiFirebase, DiReact, DiTerminal, DiVim, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainerColumn, ListContainerRow, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />

    <SectionTitle>Technologies</SectionTitle>

    <SectionText>
      I've worked with a range a technologies in the web development and QA automation world. From Front-End Design to Back-End Design to a Full End-to-End.
    </SectionText>

    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainerColumn>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js <br />
            Vue.js <br />
            Flutter
          </ListParagraph>
        </ListContainerColumn>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainerColumn>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            NodeJS <br />
            ExpressJS <br />
            Databases <br />
            AWS
          </ListParagraph>
        </ListContainerColumn>
      </ListItem>

      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainerColumn>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma <br />
            Adobe XD
          </ListParagraph>
        </ListContainerColumn>
      </ListItem>

      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainerColumn>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            C++, C#, Python, Java, SQL, HTML, CSS, JavaScript
          </ListParagraph>
        </ListContainerColumn>
      </ListItem>

      <ListItem>
        <picture>
          <DiTerminal size="3rem" />
        </picture>
        <ListContainerColumn>
          <ListTitle>Software</ListTitle>
          <ListParagraph>
            Visual Studio, Visual Studio Code, Postman, Data Studio (DB2), Azure Suite, AWS
          </ListParagraph>
        </ListContainerColumn>
      </ListItem>
    </List>
    
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
