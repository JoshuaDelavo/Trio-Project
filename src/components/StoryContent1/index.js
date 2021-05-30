import React from 'react'
import {
    StoryContent1Container, TopImageContainer, TopImage, BottomContainer, BottomHeading, BottomDescContainer, BottomDesc1, BottomDesc2, BottomText
    , RelatedStoriesContainer, RelatedStoriesHeading, RelatedStoriesCardContainer, RelatedStoriesCard, CardImageContainer, CardImage, CardTextContainer, CardText1, CardText2
} from './StoryContent1Element'
import topImageSrc from '../../images/story-content1-bg.png'
import relStorySrc from '../../images/relatedstories-image.png'

const StoryContent1 = () => {
    return (
        <StoryContent1Container>
            <TopImageContainer>
                <TopImage src={topImageSrc}></TopImage>
            </TopImageContainer>
            <BottomContainer>
                <BottomHeading>A Place Where You Can
                    Create Your Own Tea Blend</BottomHeading>
                <BottomDescContainer>
                    <BottomDesc1>15 mins read</BottomDesc1>
                    <BottomDesc2>Posted on, January 17, 2020</BottomDesc2>
                </BottomDescContainer>
                <BottomText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien turpis, lobortis imperdiet metus ac, bibendum malesuada orci. Donec pellentesque facilisis turpis id elementum. In commodo, felis id aliquam laoreet, mauris nibh sollicitudin odio, et lobortis nisl quam ac sem. Ut magna magna, accumsan id commodo sit amet, eleifend eu est. Pellentesque orci mi, consequat sit amet massa at, consectetur sagittis diam. Maecenas a enim aliquam, pretium erat ac, tincidunt velit. Fusce vehicula dignissim odio eu mattis. Praesent sed leo sagittis, tempor mauris non, condimentum justo.<br /><br />

                Nulla facilisi.In viverra orci vitae velit placerat malesuada. Proin iaculis lobortis mauris, eu feugiat dui congue non. Sed tincidunt ipsum sit amet lorem congue fermentum. Morbi laoreet ipsum massa, ac vestibulum nibh ullamcorper ac. Etiam risus ligula, tincidunt vel congue nec, lobortis eget lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur in odio sed urna malesuada facilisis.<br /><br />

                Nam venenatis libero a augue commodo interdum. Vivamus viverra mattis felis pulvinar imperdiet. Nullam varius quis eros quis sodales. Nam turpis diam, fermentum sit amet neque sit amet, blandit imperdiet quam. Duis hendrerit at ex sit amet pretium. Nulla fermentum, tortor sit amet dapibus egestas, metus eros vestibulum massa, et feugiat erat ligula sollicitudin neque. Nam efficitur fermentum elit sit amet ullamcorper. Praesent in fringilla quam. In ultrices maximus lectus sit amet aliquet. Mauris sit amet faucibus dolor. Mauris sed pharetra neque. Pellentesque quis orci ac elit malesuada ullamcorper. Proin vehicula dolor at neque ullamcorper gravida ac vel odio. Sed nunc elit, ullamcorper vel porta vitae, pretium congue neque.
                </BottomText>
            </BottomContainer>
            <RelatedStoriesContainer>
                <RelatedStoriesHeading>Related Stories...</RelatedStoriesHeading>
                <RelatedStoriesCardContainer>
                    <RelatedStoriesCard>
                        <CardImageContainer>
                            <CardImage src={relStorySrc}></CardImage>
                        </CardImageContainer>
                        <CardTextContainer>
                            <CardText1>Lembang Park and Zoo</CardText1>
                            <CardText2>Redefining Breakfast</CardText2>
                        </CardTextContainer>
                    </RelatedStoriesCard>
                    <RelatedStoriesCard>
                        <CardImageContainer>
                            <CardImage src={relStorySrc}></CardImage>
                        </CardImageContainer>
                        <CardTextContainer>
                            <CardText1>Holiday Villa Dago</CardText1>
                            <CardText2>Redefining Breakfast</CardText2>
                        </CardTextContainer>
                    </RelatedStoriesCard>
                </RelatedStoriesCardContainer>
            </RelatedStoriesContainer>
        </StoryContent1Container>
    )
}

export default StoryContent1
