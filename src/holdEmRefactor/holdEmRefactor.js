import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { holdEmFields } from "../holdem/holdEmFields";
import { compose } from "redux";
import * as actions from "../actions";
import _ from "lodash";
import InputField from "../shared/input";
import { getCardSuits, getCardValues } from "../utils/pokerUtils";
import { getUniqueArray, getNonUniqueValues, sortArray } from "../utils/utils";
import {
  checkTwoPairOrFourOfAKind,
  checkFullHouseValues,
  convertRoyalsToNumbers,
  convertNumbersToRoyals,
  convertLettersToSuits
} from "./holdEmRefactorUtils";

class HoldEmRefactored extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHoldEmSubmit = formProps => {
    let { showHoldEmHand } = this.props;

    let cards = Object.values(formProps).map(data => {
      return data.toLowerCase();
    });

    let values = convertRoyalsToNumbers(getCardValues(cards));
    let suits = getCardSuits(cards);

    if (cards.length === 5) {
      showHoldEmHand(this.checkPokerHandWithSwitchCase(values, suits));
      return;
    }
    showHoldEmHand("You should play with five cards");
    return;
  };

  checkPokerHandWithSwitchCase(values, suits) {
    let handValue;
    switch (getNonUniqueValues(values).length) {
      case 5:
        handValue = `Full House! with ${checkFullHouseValues(
          convertNumbersToRoyals(sortArray(values))
        )}`;
        break;
      case 4:
        handValue = checkTwoPairOrFourOfAKind(
          convertNumbersToRoyals(sortArray(getNonUniqueValues(values)))
        );
        break;
      case 3:
        handValue = `Three of a kind with ${
          convertNumbersToRoyals(getNonUniqueValues(values))[0]
        }'s`;
        break;
      case 2:
        handValue = `A Pair of ${
          convertNumbersToRoyals(getNonUniqueValues(values))[0]
        }'s`;
        break;
      case 0:
        handValue = this.checkForStraightsFlushesOrHighCards(values, suits);
        break;
    }
    return handValue;
  }

  checkForStraightsFlushesOrHighCards(values, suits) {
    let max = Math.max(...values);
    let min = Math.min(...values);
    let uniqueSuits = getUniqueArray(suits).length;
    if (uniqueSuits === 1) {
      if (max === 14 && max - min === 4) {
        return `Royal Flush ${convertLettersToSuits(suits[0])}`;
      } else if (max - min === 4) {
        return `Straight Flush, ${convertNumbersToRoyals([
          max
        ])} High, ${convertLettersToSuits(suits[0])}`;
      } else {
        return `Flush of ${convertLettersToSuits(suits[0])}, High Card, ${
          convertNumbersToRoyals(sortArray(values))[4]
        }`;
      }
    } else if (max - min === 4) {
      return `Straight, ${convertNumbersToRoyals([max])} High`;
    }
    return `High Card: ${convertNumbersToRoyals(sortArray(values))[4]}`;
  }

  renderFields(fields) {
    return _.map(fields, ({ name, placeholder, type }) => {
      return (
        <Field
          key={name}
          component={InputField}
          type={type}
          name={name}
          placeholder={placeholder}
          className="inputs"
        />
      );
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="holdEmWrapper">
        <div className="holdEmHeader">hold 'em</div>
        <div className="bodyWrapper">
          <div className="formWrapper">
            <form onSubmit={handleSubmit(this.onHoldEmSubmit)}>
              {this.renderFields(holdEmFields)}
              <button>Submit Hand</button>
            </form>
          </div>
          <div className="resultWrapper">{this.props.holdEm}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    holdEm: state.holdEmHand.holdEmHand
  };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "holdem" })
)(HoldEmRefactored);
