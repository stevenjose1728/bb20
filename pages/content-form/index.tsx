import React, { useEffect, useMemo, useState } from 'react'
import Layout from '@/components/Layout/Layout'
import { useRouter } from 'next/router'
import ImageUploader from '@/components/ImageUploader'
import dynamic from 'next/dynamic';
import GeneralCard from '@/components/ManageContent/GeneralCard';
import Form from '@/models/ManageContentForm';

const CKEditor = dynamic(() => import('@/components/CKEditor'), { ssr: false });
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
    links: []
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
            handleFormChange={handleFormChange}
            form={form}
            handleImageUpload={handleImageUpload}
          />
        </ul>
      </div>
    </Layout>
  )
}

export default index
