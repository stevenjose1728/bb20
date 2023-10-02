import React, { useCallback, useState } from 'react'
import Layout from '@/components/Layout/Layout'
import GeneralCard from '@/components/ManageContent/GeneralCard';
import Form from '@/models/ManageContentForm';
import VideoCard from '@/components/ManageContent/VideoCard';
import AudioCard from '@/components/ManageContent/AudioCard';
import DisplayOptionsCard from '@/components/ManageContent/DisplayOptionsCard';
import { DisplayItemOptions, DisplayOptionsPostType, Featured } from '@/models/DisplayOptionsEnum';
import CategoryForm from '@/models/ManageContentCategoriesForm';
import CategoriesData from '@/data/CategoriesData.json';
import { DisplayOptions } from '@/models/DisplayEnum';
import AppNotificationsCards from '@/components/ManageContent/AppNotificationsCards';
import { AppNotificationOptions } from '@/models/AppNotificationsEnum';

function index() {
  const defaultCategoryForm: CategoryForm = {
    category: 1,
    subCategory: 2,
    interiorSubCategory: 2,
    onDisplay: DisplayOptions.DISPLAY
  }
  const { data: categories, subCategories, interiorSubCategories } = CategoriesData
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
    videoCaption: '',
    audioArtist: '',
    audioArtistTwo: '',
    hideAudioTitleAndArtistInformation: false,
    autoStartAudio: false,
    loopAudio: false,
    displayAnimation: false,
    initialVolume: 100,
    displayOptionShowComment: false,
    displayOptionNoNewComments: false,
    categories: [],
    displayItem: DisplayItemOptions.hide,
    homePage: Featured.notFeatured,
    categoryLandingPage: Featured.notFeatured,
    unlockedPost: false,
    enableMlsSearch: false,
    packageTemplate: false,
    postType: DisplayOptionsPostType.template,
    dashboardNotifications: AppNotificationOptions.ON
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
  const addCategory = () => {
    const _categories = [...form.categories, defaultCategoryForm]
    setForm({
      ...form,
      categories: _categories
    });
  };
  const handleRemoveCategory = (index: number) => {
    let _categories = [...form.categories];
    _categories.splice(index, 1)
    setForm({
      ...form,
      categories: _categories
    })
  }
  const handleCategoriesFormChange = (value: number | string, key: keyof CategoryForm, index: number) => {
    let _categories = [...form.categories];
    let categoryForm: CategoryForm = {
      ..._categories[index],
      [key]: value
    };
    if (key === 'category') {
      categoryForm.subCategory = null
      categoryForm.interiorSubCategory = null
    }
    _categories[index] = categoryForm;
    setForm({
      ...form,
      categories: _categories
    })
  }
  const memoCategories = useCallback((index: number) => {
    const categoryForm: CategoryForm = form.categories[index];
    let _categories = [...categories];
    let _subCategories = [...subCategories];
    let _interiorSubCategories = [...interiorSubCategories];
    if (categoryForm?.category) {
      _subCategories = _subCategories.filter(element => element.category_id === categoryForm.category);
      if (categoryForm?.subCategory) {
        _interiorSubCategories = _interiorSubCategories.filter(element => element.sub_category_id === categoryForm.subCategory);
      }
    }
    return {
      categories: _categories,
      subCategories: _subCategories,
      interiorSubCategories: _interiorSubCategories
    }
  }, [form.categories]);

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
          <AudioCard
            handleFormChange={handleFormChange}
            form={form}
          />
          <DisplayOptionsCard
            handleFormChange={handleFormChange}
            form={form}
            addCategory={addCategory}
            handleCategoriesFormChange={handleCategoriesFormChange}
            memoCategories={memoCategories}
            handleRemoveCategory={handleRemoveCategory}
          />
          <AppNotificationsCards
            handleFormChange={handleFormChange}
            form={form}
          />
        </ul>
      </div>
    </Layout>
  )
}

export default index
