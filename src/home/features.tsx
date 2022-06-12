import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.5rem;
  text-align: center;
  row-gap: 50px;

  h2 {
    color: #543396;
    text-align: center;
    margin: 10px 0;
  }

  p {
    font-size: 0.8em;
    color: #2d2d2d;
  }

  & > div {
    flex: 1 1 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 50px;
    margin-top: 50px;
  }
`;

const CTA = styled.span`
  padding: 0.8rem 2rem;
  background: #543396;
  color: white;
  border-radius: 4px;
  text-align: center;
  font-size: 1rem;
`;

const Features: NextPage = () => {
  return (
    <FeatureContainer>
      <div>
        {/* <Image src="/home/no-account.png" alt="No account" height="50px" width="50px" /> */}
        {/* <h2>User friendly</h2> */}
        <h1>
          Single Page <br />
          Resume Builder
        </h1>
        <div className="cta-holder">
          <Link href="/editor">
            <a>
              <CTA>Get Started</CTA>
            </a>
          </Link>
        </div>
        {/* <p>
          Completely free and open source. User friendly interface. We do not store any of your
          information. Create unlimited resumes using our tool.
        </p> */}
      </div>
      <div>
        <Image src="/home/timer.png" alt="No account" height="50px" width="50px" />

        <h2>Build in minutes</h2>
        <p>
          With the powerful editor and wide range of professinal/job ready templates, you can build
          your resume within a matter few clicks & key strokes.
        </p>
      </div>
      <div>
        <Image src="/home/resume.png" alt="No account" height="50px" width="50px" />
        <h2>Fit for your needs</h2>
        <p>
          If you are a developer, customize the template which suits your data and all you need to
          know is some basic knowledge of React and programming.
        </p>
      </div>
    </FeatureContainer>
  );
};

export default Features;
