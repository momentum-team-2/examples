from random import shuffle
import pprint


class Card:

    ranks = ("A", '2', '3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K")
    suits = ("Clubs", "Diamonds", "Hearts", "Spades")

    def __init__(self, rank, suit):
        if rank not in self.ranks:
            raise ValueError("That is not a valid rank")
        if suit not in self.suits:
            raise ValueError("That is not a valid suit")
        self.rank = rank
        self.suit = suit

    def __repr__(self):
        return f"<Card rank={self.rank} suit={self.suit}>"

    def __str__(self):
        return f"{self.rank} of {self.suit}"


class Deck:

    def __init__(self):
        self.cards = []
        for rank in Card.ranks:
            for suit in Card.suits:
                self.cards.append(Card(rank, suit))

    def shuffle(self):
        shuffle(self.cards)

    def __str__(self):
        return f"<Deck total_cards={len(self.cards)}>"
