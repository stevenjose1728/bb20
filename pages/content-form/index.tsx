import React, { useEffect, useMemo, useState } from 'react'
import Layout from '@/components/Layout/Layout'
import GeneralCard from '@/components/ManageContent/GeneralCard';
import Form from '@/models/ManageContentForm';
import VideoCard from '@/components/ManageContent/VideoCard';

function index() {
  const initialStateForm: Form = {
    title: '',
    prettyUrl: '',
    subtitle: '',
    headline: '',
    author: '',
    documentDate: '',
    teaser: '',
    thumbnail: '',
    buttonLinkUrl: '',
    buttonText: '',
    buttonTitle: '',
    buttonOpenInNewWindow: false,
    buttonShare: false,
    mainText: '',
    firstImage: '',
    secondImage: '',
    spanImageAcross: false,
    alignLeft: false,
    alignRight: false,
    associatedFiles: [],
    links: [],
    videoWidth: '',
    videoHeight: '',
    autoStartVideo: false,
    loopVideo: false,
    videoContentImage: '',
    videoCaption: ''
  }
  const [form, setForm] = useState<Form>(initialStateForm);
  const handleFormChange = (value: string | boolean, key: keyof Form) => {
    setForm({
      ...form,
      [key]: value
    })
  }
  const handleImageUpload = (thumbnail: string | null, key: keyof Form) => {
    if (thumbnail) {
      setForm({
        ...form,
        [key]: thumbnail
      })
    }
  };
  return (
    <Layout>
      <div
        className='uk-padding'
      >
        <h2>
          Create/Edit
        </h2>
        <ul data-uk-accordion>
          <GeneralCard
            form={form}
            handleFormChange={handleFormChange}
            handleImageUpload={handleImageUpload}
          />
          <VideoCard
            handleFormChange={handleFormChange}
            handleImageUpload={handleImageUpload}
            form={form}
          />
        </ul>
      </div>
    </Layout>
  )
}

export default index
