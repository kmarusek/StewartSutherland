import React, { useCallback } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { notify } from 'react-notify-toast'
import { Button } from './Button'
import content from '../content/pages/employmentapp.json'

export const Input = styled.input`
  ${tw`bg-gray-200 px-4 py-2 w-full outline-none`}
  ::placeholder {
    ${tw`tracking-tight`}
  }
`
const Select = styled.select`
  ${tw`w-full focus:outline-none rounded-none px-4 py-2 bg-gray-200`}
  height: 40px;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
`
const TitleSection = styled.h3`
  ${tw`text-2xl font-semibold tracking-tighter mb-4`}
`
const TitleSectionSm = styled.h3`
  ${tw`text-xl font-semibold tracking-tighter mb-4`}
`
export const TextArea = styled.input`
  ${tw`w-full focus:outline-none rounded-none px-4 py-2 bg-gray-200`}
  min-height: 126px;
  ::-webkit-input-placeholder {
    position: relative !important;
    transform: translateY(-220%) !important;
  }
  input::-moz-placeholder {
    vertical-align: top;
  }
  input::-ms-input-placeholder {
    vertical-align: top;
  }
`

export const SmallForm = () => {
  const onSubmit = useCallback((ev) => {
    ev.preventDefault()
    const form = new FormData(ev.target)
    fetch('https://formspree.io/xyynrgvk', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: form,
    })
      .then(res => res.json())
      .then(res => {
        // console.log('res: ',res)
        notify.show('Submitted successfully!', 'success')
      }).catch(err => {
        console.log('err: ',err)
      })
  }, [])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p className='text-primary mb-4'>If you already have a resume email 
          <a href='mailto:kmeeks@ssbags.com' className='text-blue-500'> kmeeks@ssbags.com</a>
        </p>
        {/* section-1 */}
        <TitleSection>Personal Information</TitleSection>
        {/* row-1 */}
        <div className='mb-2'>
          <div className='mb-2'>
            <Input placeholder='First Name' name='first_name' />
          </div>
          <div className='mb-2'>
            <Input placeholder='Last Name' name='last_name' />
          </div>
          <div className='mb-2'>
            <Input placeholder='Phone Number' name='phone_number' />
          </div>
          <div className='mb-2'>
            <Input placeholder="Today's Date" name='todays_date' />
          </div>
        </div>
        {/* row-2 */}
        <div className='mb-2'>
          <div className='mb-2'>
            <Select name='is_us_citizen'>
              <option value>U.S. Citizen</option>
              <option value={false}>Not U.S. Citizen</option>
            </Select>
          </div>
          <div className='mb-2'>
            <Select name='is_over_18'>
              <option value>18 or Older</option>
              <option value={false}>Under 18</option>
            </Select>
          </div>
          <div className='mb-2'>
            <Select name='is_convicted_Felony'>
              <option value>Been Convicted With A Felony</option>
              <option value={false}>Never Convicted with Felony</option>
            </Select>
          </div>
          <div className='mb-2'>
            <Input placeholder='Enter email address' name='email' />
          </div>
        </div>
        {/* row-3 */}
        <div className='mb-2'>
          <div className='mb-2'>
            <Select name='is_eligible_work_US'>
              <option value>I am eligible to work in the U.S.</option>
              <option value={false}>
                I am not eligible to work in the U.S.
              </option>
            </Select>
          </div>
          <div className='mb-2'>
            <Select name='is_worked_here_before'>
              <option value>I have worked here before</option>
              <option value={false}>I have not worked here before</option>
            </Select>
          </div>
          <div className='mb-2'>
            <Input
              placeholder='If yes, then when did you work here?'
              name='when_did_work_here'
            />
          </div>
        </div>
        {/* section-2 */}
        <TitleSection className='mt-10'>Position Information</TitleSection>
        {/* row-2-1 */}
        <div className='mb-2'>
          <div className='mb-2'>
            <Input
              placeholder='Position Applying For'
              name='position_applying'
            />
          </div>
          <div className='mb-2'>
            <Input placeholder='Date Available' name='date_available' />
          </div>
          <div className='mb-2'>
            <Input placeholder='Desired Salary' name='desired_salary' />
          </div>
          <div className='mb-2'>
            <Select name='is_would_relocate'>
              <option value>I would relocate</option>
              <option value={false}>I would not relocate</option>
            </Select>
          </div>
        </div>
        {/* section-3 */}
        <TitleSection className='mt-10'>Employment History</TitleSection>
        {/* row-3-1 */}
        <div className='mb-2'>
          <div className='mb-2'>
            <Input
              placeholder='Most Recent/Current Employer'
              name='most_recent_employer'
            />
          </div>
          <div className='mb-2'>
            <Input placeholder='Employer Phone Number' name='employer_phone' />
          </div>
        </div>
        {/* row-3-2 */}
        <div className='mb-2'>
          <div className='mb-2'>
            <Input placeholder='Employer Address' name='employer_addr' />
          </div>
          <div className='mb-2'>
            <Input placeholder='Supervisor' name='supervisor' />
          </div>
        </div>
        {/* row-3-3 */}
        <div className='mb-2'>
          <div className='mb-2'>
            <Input placeholder='Job Title' name='job_title' />
          </div>
          <div className='mb-2' >
            <Input placeholder='Start Date' name='start_date' />
          </div>
          <div className='mb-2 ' >
            <Input
              placeholder='End Date/Leave blank if still there'
              name='end_date'
            />
          </div>
        </div>
        {/* row-3-4 */}
        <div className='mb-2'>
          <div className='mb-2'>
            <TextArea type='textarea' placeholder='Responsibilies' />
          </div>
          <div className='mb-2'>
            <div className='w-full mb-2'>
              <Input
                placeholder='Reason for leaving'
                name='reason_for_leaving'
              />
            </div>
            <div className='mb-2'>
              <Select name='may_contact_this_employer'>
                <option value>You May Contact This Employer</option>
                <option value={false}>You May Not Contact This Employer</option>
              </Select>
            </div>
          </div>
        </div>
        {/* section-4 */}
        <TitleSection className='mt-10'>Education History</TitleSection>
        {/* row-4-1 */}
        <div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input
                placeholder='Name of High school'
                name='name_high_school'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='High School Address'
                name='address_high_school'
              />
            </div>
          </div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input
                placeholder='Date Started High School'
                name='date_started_high_school'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='Date Finished High School'
                name='date_finished_high_school'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='Did You Graduate High School'
                name='graduated_high_school'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='High School Diploma'
                name='diploma_high_school'
              />
            </div>
          </div>
        </div>
        <hr className='border-primary border-t-3 my-4' />
        {/* row-4-2 */}
        <div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input placeholder='Name of College' name='name_college' />
            </div>
            <div className='mb-2'>
              <Input placeholder='College Address' name='address_college' />
            </div>
          </div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input
                placeholder='Date Started College'
                name='date_started_college'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='Date Finished College'
                name='date_finished_college'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='Did You Graduate College'
                name='graduated_college'
              />
            </div>
            <div className='mb-2'>
              <Input placeholder='College Degree' name='degree_college' />
            </div>
          </div>
        </div>
        <hr className='border-primary border-t-3 my-4' />
        {/* row-4-3 */}
        <div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input placeholder='Name of Other' name='name_other' />
            </div>
            <div className='mb-2'>
              <Input placeholder='Other Address' name='address_other' />
            </div>
          </div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input
                placeholder='Date Started Other'
                name='date_started_other'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='Date Finished Other'
                name='date_finished_other'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='Did You Graduate Other'
                name='graduated_other'
              />
            </div>
            <div className='mb-2'>
              <Input placeholder='Other Degree' name='degree_other' />
            </div>
          </div>
        </div>
        {/* section-4 */}
        <TitleSection className='mt-10'>References</TitleSection>
        {/* row-4-1 */}
        <TitleSectionSm className='' style={{ marginBottom: 8, }}>
          Professional
        </TitleSectionSm>
        <div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input
                placeholder='Reference Name'
                name='professional_reference_name_1'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='Reference Phone Number'
                name='professional_reference_phone_1'
              />
            </div>
          </div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input
                placeholder='Reference Name'
                name='professional_reference_name_2'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='Reference Phone Number'
                name='professional_reference_phone_2'
              />
            </div>
          </div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input
                placeholder='Reference Name'
                name='professional_reference_name_3'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='Reference Phone Number'
                name='professional_reference_phone_3'
              />
            </div>
          </div>
        </div>
        {/* row-4-2 */}
        <TitleSectionSm className='' style={{ marginBottom: 8, }}>
          Personal
        </TitleSectionSm>
        <div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input
                placeholder='Reference Name'
                name='personal_reference_name_1'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='Reference Phone Number'
                name='personal_reference_phone_1'
              />
            </div>
          </div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input
                placeholder='Reference Name'
                name='personal_reference_name_2'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='Reference Phone Number'
                name='personal_reference_phone_2'
              />
            </div>
          </div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input
                placeholder='Reference Name'
                name='personal_reference_name_3'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='Reference Phone Number'
                name='personal_reference_phone_3'
              />
            </div>
          </div>
        </div>
        {/* section-5 */}
        <TitleSection className='mt-4' style={{ marginBottom: 6, }}>
          Equal Opportunity Employer
        </TitleSection>
        <div>
          <p className='text-sm'>{content['equal-opportunity-employer']}</p>
        </div>
        {/* section-6 */}
        <TitleSection className='mt-8'>Military History</TitleSection>
        <div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input placeholder='Branch of Military' name='branch_military' />
            </div>
            <div className='mb-2'>
              <Input placeholder='Military Rank' name='rank_military' />
            </div>
            <div className='mb-2'>
              <Input placeholder='Military Start' name='start_military' />
            </div>
            <div className='mb-2'>
              <Input placeholder='Military Finish' name='finish_military' />
            </div>
          </div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Input
                placeholder='Military Discharge Type'
                name='discharge_type_military'
              />
            </div>
            <div className='mb-2'>
              <Input
                placeholder='If Other Then Honorable Please Explain Here'
                name='other_than_honorable_military'
              />
            </div>
          </div>
        </div>
        {/* section-7 */}
        <TitleSection className='mt-8'>Voluntary Information</TitleSection>
        <div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Select name='race'>
                <option value="Don't Wish To Identify">
                  Wish Not To Identify
                </option>
                <option value='Asian'>Asian</option>
                <option value='African American'>
                  Black or African American
                </option>
                <option value='Caucasian'>Caucasiain/Non-Hispanic</option>
                <option value='Hispanic'>Hispanic</option>
                <option value='Native American'>
                  Native American/ Alaska Native
                </option>
                <option value='Native Hawaiian'>
                  Native Hawaiian or Other Pacific Islander
                </option>
              </Select>
            </div>
            <div className='mb-2'>
              <Select className='sex'>
                <option value="Don't Wish To Identify">
                  Wish Not To Identify
                </option>
                <option value='Female'>Female</option>
                <option value='Male'>Male</option>
                <option value='Other'>Other</option>
              </Select>
            </div>
          </div>
          <div className='mb-2'>
            <div className='mb-2'>
              <Select name='disability'>
                <option value="Don't Wish To Identify">
                  Wish Not To Identify
                </option>
                <option value='Yes'>
                  I do suffer from a recognized disability
                </option>
                <option value='No'>I do not suffer from any disability</option>
              </Select>
            </div>
            <div className='mb-2'>
              <Select className='preform_job_with_assistance'>
                <option value='Yes'>
                  I can preform the job with resonable accomidations.
                </option>
                <option value='No'>
                  I can not preform the job with resonable accomidations.
                </option>
              </Select>
            </div>
          </div>
        </div>
        {/* section-8 */}
        <TitleSection className='mt-8'>
          Background and Drug Testing
        </TitleSection>
        <div className='mb-2'>
          <div className='mb-2'>
            <Select name='background_check'>
              <option value='Yes'>
                I am willing to allow a background check.
              </option>
              <option value='No'>
                I am not willing to allow a background check.
              </option>
            </Select>
          </div>
          <div className='mb-2'>
            <Select className='drug_test'>
              <option value='Yes'>
                I am willing to undergo a drug screening.
              </option>
              <option value='No'>
                I am not willing to undergo a drug screening.
              </option>
            </Select>
          </div>
        </div>
        {/* section-9 */}
        <TitleSection className='mt-8'>Disclaimer</TitleSection>
        <div>
          {content.disclaimer.map((txt, idx) => (
            <p key={idx} className='text-sm mb-2'>
              {txt}
            </p>
          ))}
        </div>
        {/* section-10 */}
        <TitleSection className='mt-8'>Signature</TitleSection>
        <div>
          {content.signature.map((txt, idx) => (
            <p key={idx} className='text-sm mb-4'>
              {txt}
            </p>
          ))}
        </div>
        <div className='mb-2'>
          <div className='mb-2'>
            <Input placeholder='Type Name for Digital Signature' name='digital_signature' />
          </div>
          <div className='mb-2'>
            <Input placeholder="Today's Date" name='date2' />
          </div>
          <div className='mb-2'>
            {/* <Input placeholder='Date Of Birth' name='dob' /> */}
          </div>
        </div>
        <div className='flex mt-8 justify-end'>
          <Button
            variant='primary'
            type='submit'
            className='focus:outline-none'
          >
            Submit Application
          </Button>
        </div>
      </form>
    </div>
  )
}
