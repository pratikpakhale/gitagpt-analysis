const conversations = {
  conv001: [
    'Hare Krishna!',
    'Could you show verse 1.1 from chapter 1?',
    'Yes',
    'Please show the next verse',
    'Thank you',
  ],
  conv002: [
    'Provide a summary of chapter 2',
    "That's interesting, could you explain more?",
  ],
  conv003: ['Display all verses of chapter 3', 'Thank you for sharing'],
  conv004: [
    'verse 4 of chapter 5',
    'Would you share verse 5.4?',
    'Yes',
    'Can you explain its meaning?',
  ],
  conv005: [
    'Jai Shri Krishna!',
    'Please show verse 6.1 from chapter 6',
    'No',
    'Thank you',
    'Goodbye',
  ],
  conv006: [
    'Display verse 7.7 of chapter 7',
    'Yes',
    'Show the previous verse',
    'What does this mean?',
  ],
  conv007: [
    'Provide a summary of chapter 8',
    'Display verse 8.1 from chapter 8',
    'How does this relate to the summary?',
  ],
  conv008: [
    'Namaste',
    'Please show all verses of chapter 9',
    'Thank you',
    'That was informative',
  ],
  conv009: [
    'Display verse 10.10 from chapter 10',
    'Yes',
    'Show the next verse',
    'Show the following verse',
    'Thank you',
  ],
  conv010: [
    'Provide a summary of chapter 11',
    'Display verse 11.11 from chapter 11',
    'No',
    'I see, thank you',
  ],
  conv011: [
    'Hare Krishna!',
    'Could you show verse 12.12 from chapter 12?',
    'Yes',
    "What's the key message here?",
  ],
  conv012: [
    'Provide a summary of chapter 13',
    'How does this chapter relate to the previous one?',
  ],
  conv013: [
    'Display all verses of chapter 14',
    'Thank you',
    'Which verse is most significant?',
  ],
  conv014: [
    'verse 15 of chapter 15',
    'Would you share verse 15.15?',
    'Yes',
    'Can you explain its context?',
  ],
  conv015: [
    'Jai Shri Krishna!',
    'Please show verse 16.16 from chapter 16',
    'No',
    'Thank you anyway',
  ],
  conv016: [
    'Display verse 17.17 of chapter 17',
    'Yes',
    'Show the next verse',
    "What's the connection between these verses?",
  ],
  conv017: [
    'Provide a summary of chapter 18',
    'Display verse 18.18 from chapter 18',
    'How does this verse summarize the chapter?',
  ],
  conv018: [
    'Namaste',
    'Please show all verses of chapter 1',
    'Thank you',
    'Which verse introduces the main conflict?',
  ],
  conv019: [
    'Display verse 2.20 from chapter 2',
    'Yes',
    'Show the previous verse',
    'How do these verses relate?',
  ],
  conv020: [
    'Provide a summary of chapter 3',
    'Display verse 3.3 from chapter 3',
    'No',
    'Thank you for the information',
  ],
  conv021: [
    'Could you show verse 4.4 of chapter 4?',
    'Yes',
    "What's the main teaching here?",
  ],
  conv022: [
    'Give me a summary of chapter 5',
    'How does this chapter discuss karma?',
  ],
  conv023: [
    'Show all verses from chapter 6',
    'Thank you',
    'Which verse talks about meditation?',
  ],
  conv024: [
    'verse 7 of chapter 7',
    'Can you share verse 7.7?',
    'Yes',
    'How does Krishna describe himself here?',
  ],
  conv025: [
    'Jai Shri Krishna!',
    'Please display verse 8.8 from chapter 8',
    'No',
    'I understand, thank you',
  ],
  conv026: [
    'Show verse 9.9 of chapter 9',
    'Yes',
    'Display the next verse',
    'How are these verses connected?',
  ],
  conv027: [
    'Provide a summary of chapter 10',
    'Show verse 10.10 from chapter 10',
    'How does this verse relate to divine manifestations?',
  ],
  conv028: [
    'Namaste',
    'Please show all verses of chapter 11',
    'Thank you',
    "Which verse describes Arjuna's reaction to the universal form?",
  ],
  conv029: [
    'Display verse 12.12 from chapter 12',
    'Yes',
    'Show the previous verse',
    "What's the theme of these verses?",
  ],
  conv030: [
    'Give a summary of chapter 13',
    'Show verse 13.13 from chapter 13',
    'No',
    'Thank you for explaining',
  ],
  conv031: [
    'Could you display verse 14.14 of chapter 14?',
    'Yes',
    "What's the significance of this verse?",
  ],
  conv032: [
    'Provide a summary of chapter 15',
    'How does this chapter relate to the cosmic tree?',
  ],
  conv033: [
    'Show all verses from chapter 16',
    'Thank you',
    'Which verse discusses divine qualities?',
  ],
  conv034: [
    'verse 17 of chapter 17',
    'Can you share verse 17.17?',
    'Yes',
    'How does this verse relate to faith?',
  ],
  conv035: [
    'Jai Shri Krishna!',
    'Please show verse 18.18 from chapter 18',
    'No',
    'I appreciate your help',
  ],
  conv036: [
    'Display verse 1.19 of chapter 1',
    'Yes',
    'Show the next verse',
    "What's happening in these verses?",
  ],
  conv037: [
    'Give a summary of chapter 2',
    'Show verse 2.2 from chapter 2',
    'How does this verse set the tone for the chapter?',
  ],
  conv038: [
    'Namaste',
    'Please show all verses of chapter 3',
    'Thank you',
    "Which verse talks about performing one's duty?",
  ],
  conv039: [
    'Display verse 4.4 from chapter 4',
    'Yes',
    'Show the previous verse',
    'How do these verses explain karma yoga?',
  ],
  conv040: [
    'Provide a summary of chapter 5',
    'Show verse 5.5 from chapter 5',
    'No',
    'Thank you for the explanation',
  ],
  conv041: [
    'Hare Krishna!',
    'Could you show verse 6.6 of chapter 6?',
    'Yes',
    'What does this verse say about self-control?',
  ],
  conv042: [
    'Give me a summary of chapter 7',
    "How does this chapter describe Krishna's divine nature?",
  ],
  conv043: [
    'Show all verses from chapter 8',
    'Thank you',
    'Which verse talks about remembering Krishna at the time of death?',
  ],
  conv044: [
    'verse 9 of chapter 9',
    'Can you share verse 9.9?',
    'Yes',
    'How does this verse describe devotion?',
  ],
  conv045: [
    'Jai Shri Krishna!',
    'Please display verse 10.10 from chapter 10',
    'No',
    'I understand, thank you for your time',
  ],
  conv046: [
    'Show verse 11.11 of chapter 11',
    'Yes',
    'Display the next verse',
    'How do these verses describe the universal form?',
  ],
  conv047: [
    'Provide a summary of chapter 12',
    'Show verse 12.12 from chapter 12',
    'How does this verse describe the ideal devotee?',
  ],
  conv048: [
    'Namaste',
    'Please show all verses of chapter 13',
    'Thank you',
    'Which verse defines the field and the knower of the field?',
  ],
  conv049: [
    'Display verse 14.14 from chapter 14',
    'Yes',
    'Show the previous verse',
    'How do these verses explain the three gunas?',
  ],
  conv050: [
    'Give a summary of chapter 15',
    'Show verse 15.15 from chapter 15',
    'No',
    'Thank you for the insights',
  ],
  conv051: [
    'Hare Krishna!',
    'Could you show verse 16.16 of chapter 16?',
    'Yes',
    'What does this verse say about divine and demonic natures?',
  ],
  conv052: [
    'Provide a summary of chapter 17',
    'How does this chapter explain the three types of faith?',
  ],
  conv053: [
    'Show all verses from chapter 18',
    'Thank you',
    'Which verse is considered the essence of the Gita?',
  ],
  conv054: [
    'verse 1 of chapter 1',
    'Can you share verse 1.1?',
    'Yes',
    'How does the Gita begin?',
  ],
  conv055: [
    'Jai Shri Krishna!',
    'Please show verse 2.2 from chapter 2',
    'No',
    'I appreciate your assistance',
  ],
  conv056: [
    'Display verse 3.3 of chapter 3',
    'Yes',
    'Show the next verse',
    'How do these verses explain karma yoga?',
  ],
  conv057: [
    'Give a summary of chapter 4',
    'Show verse 4.4 from chapter 4',
    'How does this verse describe the nature of action?',
  ],
  conv058: [
    'Namaste',
    'Please show all verses of chapter 5',
    'Thank you',
    'Which verse talks about equanimity?',
  ],
  conv059: [
    'Display verse 6.6 from chapter 6',
    'Yes',
    'Show the previous verse',
    'How do these verses describe the mind?',
  ],
  conv060: [
    'Provide a summary of chapter 7',
    'Show verse 7.7 from chapter 7',
    'No',
    'Thank you for the explanation',
  ],
  conv061: [
    'Hare Krishna!',
    'Could you show verse 8.8 of chapter 8?',
    'Yes',
    'What does this verse say about constant meditation?',
  ],
  conv062: [
    'Give me a summary of chapter 9',
    'How does this chapter describe bhakti yoga?',
  ],
  conv063: [
    'Show all verses from chapter 10',
    'Thank you',
    "Which verse lists Krishna's divine manifestations?",
  ],
  conv064: [
    'verse 11 of chapter 11',
    'Can you share verse 11.11?',
    'Yes',
    'How does this verse describe the universal form?',
  ],
  conv065: [
    'Jai Shri Krishna!',
    'Please display verse 12.12 from chapter 12',
    'No',
    'I understand, thank you',
  ],
  conv066: [
    'Show verse 13.13 of chapter 13',
    'Yes',
    'Display the next verse',
    'How do these verses describe the knowable?',
  ],
  conv067: [
    'Provide a summary of chapter 14',
    'Show verse 14.14 from chapter 14',
    'How does this verse explain transcendence of the gunas?',
  ],
  conv068: [
    'Namaste',
    'Please show all verses of chapter 15',
    'Thank you',
    'Which verse describes the supreme person?',
  ],
  conv069: [
    'Display verse 16.16 from chapter 16',
    'Yes',
    'Show the previous verse',
    'How do these verses contrast divine and demonic qualities?',
  ],
  conv070: [
    'Give a summary of chapter 17',
    'Show verse 17.17 from chapter 17',
    'No',
    'Thank you for the insights',
  ],
  conv071: [
    'Hare Krishna!',
    'Could you show verse 18.18 of chapter 18?',
    'Yes',
    'What does this verse say about the constituents of action?',
  ],
  conv072: [
    'Provide a summary of chapter 1',
    'How does this chapter set the scene for the Gita?',
  ],
  conv073: [
    'Show all verses from chapter 2',
    'Thank you',
    'Which verse introduces the concept of the soul?',
  ],
  conv074: [
    'verse 3 of chapter 3',
    'Can you share verse 3.3?',
    'Yes',
    'How does this verse explain the two paths?',
  ],
  conv075: [
    'Jai Shri Krishna!',
    'Please show verse 4.4 from chapter 4',
    'No',
    'I appreciate your help',
  ],
  conv076: [
    'Display verse 5.5 of chapter 5',
    'Yes',
    'Show the next verse',
    'How do these verses describe the enlightened person?',
  ],
  conv077: [
    'Give a summary of chapter 6',
    'Show verse 6.6 from chapter 6',
    'How does this verse describe the controlled mind?',
  ],
  conv078: [
    'Namaste',
    'Please show all verses of chapter 7',
    'Thank you',
    "Which verse describes Krishna's two natures?",
  ],
  conv079: [
    'Display verse 8.8 from chapter 8',
    'Yes',
    'Show the previous verse',
    'How do these verses explain constant remembrance of the Divine?',
  ],
  conv080: [
    'Provide a summary of chapter 9',
    'Show verse 9.9 from chapter 9',
    'No',
    'Thank you for the explanation',
  ],
  conv081: [
    'Hare Krishna!',
    'Could you show verse 10.10 of chapter 10?',
    'Yes',
    'What does this verse say about devotion and wisdom?',
  ],
  conv082: [
    'Give me a summary of chapter 11',
    'How does this chapter describe the universal form?',
  ],
  conv083: [
    'Show all verses from chapter 12',
    'Thank you',
    'Which verse compares personal and impersonal worship?',
  ],
  conv084: [
    'verse 13 of chapter 13',
    'Can you share verse 13.13?',
    'Yes',
    'How does this verse describe the knowable?',
  ],
  conv085: [
    'Jai Shri Krishna!',
    'Please display verse 14.14 from chapter 14',
    'No',
    'I understand, thank you for your time',
  ],
  conv086: [
    'Show verse 15.15 of chapter 15',
    'Yes',
    'Display the next verse',
    "How do these verses describe Krishna's all-pervasiveness?",
  ],
  conv087: [
    'Provide a summary of chapter 16',
    'Show verse 16.16 from chapter 16',
    'How does this verse describe the results of desire?',
  ],
  conv088: [
    'Namaste',
    'Please show all verses of chapter 17',
    'Thank you',
    'Which verse explains the three types of faith?',
  ],
  conv089: [
    'Display verse 18.18 from chapter 18',
    'Yes',
    'Show the previous verse',
    'How do these verses explain the factors of action?',
  ],
  conv090: [
    'Give a summary of chapter 1',
    'Show verse 1.1 from chapter 1',
    'No',
    'Thank you for the insights',
  ],
  conv091: [
    'Hare Krishna!',
    'Could you show verse 2.2 of chapter 2?',
    'Yes',
    'What does Krishna say to Arjuna in this verse?',
  ],
  conv092: [
    'Provide a summary of chapter 3',
    'How does this chapter explain karma yoga?',
  ],
  conv093: [
    'Show all verses from chapter 4',
    'Thank you',
    'Which verse talks about the nature of action and inaction?',
  ],
  conv094: [
    'verse 5 of chapter 5',
    'Can you share verse 5.5?',
    'Yes',
    'How does this verse describe the wise person?',
  ],
  conv095: [
    'Jai Shri Krishna!',
    'Please show verse 6.6 from chapter 6',
    'No',
    'I appreciate your assistance',
  ],
  conv096: [
    'Display verse 7.7 of chapter 7',
    'Yes',
    'Show the next verse',
    "How do these verses describe Krishna's supreme nature?",
  ],
  conv097: [
    'Give a summary of chapter 8',
    'Show verse 8.8 from chapter 8',
    'How does this verse explain constant meditation?',
  ],
  conv098: [
    'Namaste',
    'Please show all verses of chapter 9',
    'Thank you',
    "Which verse describes Krishna's impartiality?",
  ],
  conv099: [
    'Display verse 10.10 from chapter 10',
    'Yes',
    'Show the previous verse',
    'How do these verses explain divine grace?',
  ],
  conv100: [
    'Provide a summary of chapter 11',
    'Show verse 11.11 from chapter 11',
    'No',
    'Thank you for the explanation',
  ],
};

module.exports = conversations;