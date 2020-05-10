import styled from 'styled-components';

const StyledDetails = styled.div`
  .details__header {
    font-size: 54px;
    text-align: center;
    font-weight: bold;
    padding: 12px 0;
    max-width: 50%;
    margin: 0 auto;
  }

  .details__subheader {
    font-size: 32px;
    padding-bottom: 12px;
  }

  .details__price {
    font-size: 32px;
    text-align: center;
  }

  .details__item {
    padding: 24px 0;
  }

  .details__description {
    max-width: 80%;
    margin: 0 auto;
    p {
      font-size: 16px;
      line-height: 2;
    }
  }

  .details__rating {
    text-align: center;
    width: 50%;
    margin: 0 auto;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .details__comments {
    margin: 0 auto;
    max-width: 650px;
    padding: 50px 0;
  }
`
export default StyledDetails;