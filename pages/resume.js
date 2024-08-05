import Head from 'next/head';
import Image from 'next/image';

import sherbet from '../public/images/sherbet.png';

export default function Resume() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Resume</title>
      </Head>

      <div className='border-8 border-yellow-600 border-solid'>
        <main className='resumeBody'>
          <div className='border-4 border-black border-solid'>

            <div className='flex justify-center items-center'>
              <a href='/'>
                <Image 
                  src={sherbet} 
                  width={100} 
                  height={100} 
                  className='h-24 w-auto flex justify-center items-center mt-4' 
                  title="John McEwan | Developer Profile" 
                />
              </a>
            </div>

            <h1 className='font-jetbrains text-6xl'>John McEwan</h1>
            <br/>
            <hr />

            <h2>Education</h2>
            <div className="flex justify-center items-center">
              <table className='tableStyle'>
                <thead>
                  <tr>
                    <th className='tableHeadStyle'>Education</th>
                    <th className='tableHeadStyle'>Establishment</th>
                    <th className='tableHeadStyle'>Dates</th>
                    <th className='tableHeadStyle'>Qualifications</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GNVQ ICT</td>
                    <td>Ashton On Ribble High School</td>
                    <td>2000 - 2005</td>
                    <td>Pass</td>
                  </tr>
                  <tr>
                    <td>GCSE English</td>
                    <td>Ashton On Ribble High School</td>
                    <td>2000 - 2005</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td>GCSE English Literature</td>
                    <td>Ashton On Ribble High School</td>
                    <td>2000 - 2005</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td>GCSE Graphic Design</td>
                    <td>Ashton On Ribble High School</td>
                    <td>2000 - 2005</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>GCSE History</td>
                    <td>Ashton On Ribble High School</td>
                    <td>2000 - 2005</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>GCSE Statistics</td>
                    <td>Ashton On Ribble High School</td>
                    <td>2000 - 2005</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>GCSE Mathematics</td>
                    <td>Ashton On Ribble High School</td>
                    <td>2000 - 2005</td>
                    <td>D</td>
                  </tr>
                  <tr>
                    <td>A-Level Graphic Design</td>
                    <td>Preston College</td>
                    <td>2008-10</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>A-Level English Lang/Lit</td>
                    <td>Preston College</td>
                    <td>2008-10</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>A-Level Media Studies</td>
                    <td>Preston College</td>
                    <td>2008-10</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>BA Animation</td>
                    <td>University of Central Lancashire</td>
                    <td>2011-2016</td>
                    <td>BA (Hons)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br />
            <hr />

            <h2>Employment</h2>
            <div className="flex justify-center items-center">
              <table className='tableStyle'>
                <thead>
                  <tr>
                    <th className='tableHeadStyle'>Organisation</th>
                    <th className='tableHeadStyle'>Summary</th>
                    <th className='tableHeadStyle'>Dates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>St Catherines Hospice</td>
                    <td>
                      Nursing Assistant on the In-Patient Unit at a hospice providing quality care in a palliative setting. Assisted
                      nursing team with care and meeting needs and comfort of terminally ill patients. Stock inventory rotation and
                      ensuring ongoing security of the building. Concise reporting and documentation of sensitive data with regards to
                      care plans and treatment
                    </td>
                    <td>2019 - 2023</td>
                  </tr>
                  <tr>
                    <td>PDX Technical Solutions</td>
                    <td>
                      Network engineering. Backup spanner monkey. Mostly fixed servers, phones, printers and the occasional television.
                    </td>
                    <td>2018 - 2019</td>
                  </tr>
                  <tr>
                    <td>Regency Lodge</td>
                    <td>
                      Worked at a 22-bed medium secure psychiatric rehabilitation facility for vulnerable adults with a complex range of
                      mental health disorders and challenging behaviour in a support worker role. Assisted with supporting residents
                      daily activities and wellbeing. Handling of medication and security of airlocks and the surrounding area. Escorting
                      residents on leave and trips out into the community
                    </td>
                    <td>2010 - 2014</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <br />
            <p>
              <a id="email" href="mailto:bonzojo@proton.me">Contact Me</a>
            </p>
            <br />
          </div>
        </main>
      </div>
    </>
  );
}
