import { AppNotificationOptions } from "./AppNotificationsEnum"
import AssociatedFile from "./AssociatedFile"
import CustomLink from "./CustomLink"
import { DisplayItemOptions, DisplayOptionsPostType, Featured } from "./DisplayOptionsEnum"
import CategoryForm from "./ManageContentCategoriesForm"

type Form = {
  title: string,
  prettyUrl: string,
  subtitle: string,
  headline: string,
  author: string,
  documentDate: string,
  teaser: string,
  thumbnail: string,
  buttonTitle: string,
  buttonText: string,
  buttonLinkUrl: string,
  buttonOpenInNewWindow: boolean,
  buttonShare: boolean,
  mainText: string,
  firstImage: string,
  secondImage: string,
  spanImageAcross: boolean,
  alignLeft: boolean,
  alignRight: boolean,
  associatedFiles: AssociatedFile[],
  links: CustomLink[],
  /**
   * Video
   */
  videoWidth: string,
  videoHeight: string,
  autoStartVideo: boolean,
  loopVideo: boolean,
  videoContentImage: string,
  videoCaption: string,
  /**
   * Audio
   */
  audioArtist: string,
  audioArtistTwo: string,
  hideAudioTitleAndArtistInformation: boolean,
  autoStartAudio: boolean,
  loopAudio: boolean,
  displayAnimation: boolean,
  initialVolume: number
  /**
   * Display Options
   */
  displayOptionShowComment: boolean,
  displayOptionNoNewComments: boolean,
  categories: CategoryForm[],
  displayItem: DisplayItemOptions.display | DisplayItemOptions.hide | DisplayItemOptions.withInDateRange,
  homePage: Featured.featured | Featured.notFeatured | Featured.withInDateRange
  categoryLandingPage: Featured.featured | Featured.notFeatured | Featured.withInDateRange
  unlockedPost: boolean,
  enableMlsSearch: boolean,
  packageTemplate: boolean,
  postType: DisplayOptionsPostType.externalUrl | DisplayOptionsPostType.page | DisplayOptionsPostType.staticDocument | DisplayOptionsPostType.template
  /**
   * App notifications
   */
  dashboardNotifications: AppNotificationOptions.HIGH_PRIORITY | AppNotificationOptions.OFF | AppNotificationOptions.ON
}

export default Form