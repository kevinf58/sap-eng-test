import Button from './common/Button'
import Container from './common/Container'

const Description = () => {
  return (
    <Container
      popoverChildren={
        <Button onClick={() => {}}>
          <div>Button</div>
        </Button>
      }
      children={
        <p>
          Jae Doe's Journey has been a tapestry of curiosity and exploration.
          From a young age, their inquisitive mind led them through diverse
          interests. Education shaped their multidisciplinary perspective, while
          personal experiences added depth and resilience to their story.
          Embracing challenges and cherishing relationships, Jae continues to
          craft a unique and inspiring life history.
        </p>
      }
    />
  )
}

export default Description
