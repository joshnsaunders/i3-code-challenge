import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { holdEmFields } from "./holdEmFields";
import { compose } from "redux";
import * as actions from "../actions";
import _ from "lodash";
import InputField from "../shared/input";
import {
  checkForFullHouseOrFourOfAKind,
  checkForStraightFlushes,
  checkForFlush,
  checkForStraight,
  checkForTwoPairThreeOfAKind,
  checkForSinglePair,
  checkForHighCard,
  convertRoyalCardsToNumbers,
  getCardSuits,
  getCardValues
} from "../utils/pokerUtils";
import { getUniqueArray, getNonUniqueValues } from "../utils/utils";

class HoldEm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHoldEmSubmit = formProps => {
    let { showHoldEmHand } = this.props;

    let cards = Object.values(formProps).map(data => {
      return data.toLowerCase();
    });
    if (cards.length === 5) {
      showHoldEmHand(this.checkPokerHand(cards));
      return;
    }
    showHoldEmHand("You're playing the wrong game.");
    return;
  };

  checkPokerHand(cards) {
    let straightFlush = checkForStraightFlushes(
      getUniqueArray(convertRoyalCardsToNumbers(getCardValues(cards))),
      getUniqueArray(getCardSuits(cards))
    );
    if (straightFlush) {
      return straightFlush;
    }

    let fullHouseOrFourOfAKind = checkForFullHouseOrFourOfAKind(
      getCardValues(cards),
      getUniqueArray(getCardValues(cards))
    );
    if (fullHouseOrFourOfAKind) {
      return fullHouseOrFourOfAKind;
    }

    let flush = checkForFlush(getUniqueArray(getCardSuits(cards)));
    if (flush) {
      return flush;
    }

    let straight = checkForStraight(
      getUniqueArray(convertRoyalCardsToNumbers(getCardValues(cards)))
    );
    if (straight) {
      return straight;
    }

    let twoPairOrThreeOfAKind = checkForTwoPairThreeOfAKind(
      getUniqueArray(getCardValues(cards)),
      getNonUniqueValues(getCardValues(cards))
    );
    if (twoPairOrThreeOfAKind) {
      return twoPairOrThreeOfAKind;
    }

    let singlePair = checkForSinglePair(
      getNonUniqueValues(getCardValues(cards))
    );
    if (singlePair) {
      return singlePair;
    }
    let highCard = checkForHighCard(
      convertRoyalCardsToNumbers(getCardValues(cards))
    );
    return highCard;
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
)(HoldEm);
