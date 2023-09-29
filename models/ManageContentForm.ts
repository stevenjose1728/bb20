import AssociatedFile from "./AssociatedFile"
import CustomLink from "./CustomLink"

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
  links: CustomLink[]
}

export default Form