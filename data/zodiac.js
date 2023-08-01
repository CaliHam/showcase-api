const zodiacData = {
    'Aries': {
      compatible: ['Gemini', 'Leo', 'Sagittarius', 'Aquarius', 'Aries'],
      incompatible: ['Cancer', 'Capricorn'],
      startDate: 321,
      compatibilityReport: {
        'Gemini': 'A vibrant connection filled with energy and enthusiasm. Both signs love novelty and adventure, yet might struggle with each other`s unpredictable nature at times.',
        'Leo': 'Both signs are passionate, enthusiastic, and confident. They thrive on action, excitement and constantly challenge each other. This pairing can lead to powerful mutual respect.',
        'Sagittarius': 'Two fiery spirits meet here, with an adventure at every corner. They stimulate each other with new ideas and shared adventures. Though they may compete for the spotlight, their mutual respect and love for freedom keeps them together.',
        'Aquarius': "This pairing brings together the fiery energy of Aries with Aquarius's originality. Independent and enthusiastic, they can create a relationship filled with exciting and new experiences.",
        "Aries": "Two Aries together form a dynamic, spontaneous partnership. They understand each other's need for excitement and adventure. However, their fiery tempers can lead to explosive arguments, and they may struggle to compromise."
      },
      incompatibilityReport: {
        'Cancer': 'The impulsive nature of Aries may clash with the sensitive and nurturing nature of Cancer, leading to misunderstandings. This can be a challenging pairing that requires work and patience.',
        'Capricorn': 'Aries and Capricorn may have different values and approaches to life, with Aries being more spontaneous and Capricorn being more traditional and disciplined. This might lead to disagreements.'
      }
    },
    'Taurus': {
      compatible: ['Cancer', 'Virgo', 'Capricorn', 'Pisces', 'Taurus'],
      incompatible: ['Leo', 'Aquarius'],
      startDate: 420,
      compatibilityReport: {
        'Cancer': 'A natural pairing that shares a deep understanding of stability and comfort. Both Taurus and Cancer appreciate a quiet evening at home more than a wild night on the town.',
        'Virgo': 'Two earth signs meet here, creating a solid and grounded relationship built on mutual respect, understanding and care. Their shared practical nature makes them a harmonious couple.',
        'Capricorn': 'The Taurus-Capricorn connection is grounded in a mutual sense of respect and understanding. Both value tradition and practicality, which makes for a relationship that often grows and endures.',
        'Pisces': 'Pisces provides a balance to Taurus`s practical nature with their emotional depth. This relationship is often built on a foundation of care and understanding.',
        "Taurus": "A relationship between two Taurus individuals is built on a solid foundation of practicality and sensibility. They share a love for comfort and luxury. However, their stubborn nature can create standoffs, and they must learn to work through disagreements."
      },
      incompatibilityReport: {
        'Leo': 'Taurus`s steadfast nature might clash with Leo`s desire for drama and attention, leading to a relationship full of ups and downs. Both signs will need to practice patience and understanding.',
        'Aquarius': 'Aquarius`s innovative ideas may seem too outlandish for the more practical Taurus. This pairing can lead to challenges as Taurus likes consistency and Aquarius thrives on change.'
      },
    },
  "Gemini": {
      compatible: ['Aries', 'Leo', 'Libra', 'Aquarius', 'Gemini'],
      incompatible: ['Virgo', 'Pisces'],
      startDate: 521,
      compatibilityReport: {
        'Aries': "When Gemini and Aries come together, their partnership is full of energy and vitality. Aries' pioneering spirit and Gemini's intellectual curiosity make for an exciting dynamic.",
        'Leo': "Leo's regal demeanor and Gemini's playful charm complement each other well. Together, they create an atmosphere of creativity and fun.",
        'Libra': "The intellectual connection between Libra and Gemini is powerful. Their conversations flow easily, and they can discuss anything and everything.",
        'Aquarius': "Gemini and Aquarius share a love of knowledge and new experiences. Their relationship is one that is constantly evolving and full of surprises.",
        "Gemini": "When two Geminis come together, it is a whirlwind of conversation, adventure, and intellect. They appreciate each other`s quick wit and broad interests. However, they both struggle with inconsistency and may find it hard to ground their relationship."
      },
      incompatibilityReport: {
        'Virgo': "Gemini's whimsical nature and Virgo's practicality can lead to misunderstandings. Patience and understanding are needed for this pairing to work.",
        'Pisces': "Gemini's logical thinking and Pisces' emotional depth can make communication difficult. They will need to learn to understand each other's perspectives."
      }
    },
    
  "Cancer": {
      compatible: ['Taurus', 'Virgo', 'Scorpio', 'Pisces', 'Cancer'],
      incompatible: ['Aries', 'Libra'],
      startDate: 621,
      compatibilityReport: {
        'Taurus': "Cancer and Taurus share a need for security and comfort. They understand each other's needs intuitively and create a warm, loving environment.",
        'Virgo': "Virgo's analytical approach complements Cancer's emotional nature. This duo can build a stable, nurturing relationship.",
        'Scorpio': "The emotional depth of Scorpio and Cancer create a powerful bond. They understand each other on a profound level.",
        'Pisces': "Cancer and Pisces both have a deep, intuitive understanding of the world. Their connection is gentle, empathetic, and caring.",
        "Cancer":  "A relationship between two Cancers is deeply emotional and nurturing. They understand each other`s need for security and emotional support. However, their shared sensitivity could lead to mood swings and misunderstandings." 
      },
      incompatibilityReport: {
        'Aries': "Cancer's need for emotional connection clashes with Aries' independent spirit. They may struggle to understand each other's needs.",
        'Libra': "Libra's sociability may feel superficial to the deeply emotional Cancer. They need to respect each other's differences to build a harmonious relationship."
      }
    },
    "Leo": {
      compatible: ['Aries', 'Gemini', 'Libra', 'Sagittarius', 'Leo'],
      incompatible: ['Taurus', 'Scorpio'],
      startDate: 723,
      compatibilityReport: {
        'Aries': "Leo and Aries are a fiery and passionate match. Both being natural leaders, they will need to learn to share the spotlight.",
        'Gemini': "Leo's charm and Gemini's wit create a dynamic, lively relationship. They keep each other entertained and love to enjoy life.",
        'Libra': "Leo's confidence and Libra's charm make for a balanced partnership. They appreciate the finer things in life and love to socialize.",
        'Sagittarius': "Both Leo and Sagittarius are adventurous and outgoing. They love exploring and experiencing life together.",
        "Leo":  "Two Leos together create a vibrant, energetic relationship full of drama and passion. They understand each other`s need for admiration and respect. However, they may compete for attention and struggle with sharing the spotlight."
      },
      incompatibilityReport: {
        'Taurus': "Leo's need for attention can clash with Taurus' practical nature. They need to find common ground and appreciate each other's differences.",
        'Scorpio': "The intense emotions of Scorpio can feel overwhelming to the lighthearted Leo. Both signs need to practice understanding and patience."
      }
    },
  "Virgo": {
      compatible: ['Taurus', 'Cancer', 'Scorpio', 'Capricorn', 'Virgo'],
      incompatible: ['Gemini', 'Sagittarius'],
      startDate: 823,
      compatibilityReport: {
        'Taurus': "Virgo and Taurus share a practical and methodical approach to life. Their shared values make for a harmonious relationship.",
        'Cancer': "Cancer's intuitive understanding complements Virgo's analytical nature. This pair has the potential for a deep, fulfilling relationship.",
        'Scorpio': "The analytical Virgo and the intuitive Scorpio can create a strong, balanced partnership. Both appreciate the other's depth and complexity.",
        'Capricorn': "Both Virgo and Capricorn are earth signs and value practicality and efficiency. They build a stable and secure relationship together.",
        "Virgo":  "When two Virgos partner up, it's a meeting of minds. They share a serious, detail-oriented, and practical approach to life. However, they can be overly critical of each other and themselves, and may need to work on being more relaxed and spontaneous."
      },
      incompatibilityReport: {
        'Gemini': "Virgo's need for order can clash with Gemini's whimsical nature. They will need to learn to appreciate each other's differences.",
        'Sagittarius': "Virgo's methodical approach may seem too restrictive for the freedom-loving Sagittarius. Mutual respect is key for this pair."
      }
    },
    "Libra": {
      compatible: ['Gemini', 'Leo', 'Sagittarius', 'Aquarius', 'Libra'],
      incompatible: ['Cancer', 'Capricorn'],
      startDate: 923,
      compatibilityReport: {
        'Gemini': "Libra and Gemini share a love for intellectual exploration. They stimulate each other's minds and enjoy lively conversations.",
        'Leo': "Leo's confidence and Libra's charm make for a balanced and harmonious relationship. They love to socialize and enjoy the finer things in life.",
        'Sagittarius': "Libra's diplomatic nature balances Sagittarius' frankness. They have a mutual understanding and a love for adventure.",
        'Aquarius': "Libra and Aquarius are both air signs and share an intellectual approach to life. They inspire each other and enjoy a lively relationship.",
        "Libra": "A pair of Libras creates a balanced, harmonious relationship. They share a love for beauty, art, and social events. However, they can struggle with indecision and may avoid confrontation to the point of frustration."
      },
      incompatibilityReport: {
        'Cancer': "Libra's need for socializing might feel superficial to the more emotional Cancer. This pair needs understanding and acceptance of each other's nature.",
        'Capricorn': "Libra's indecisiveness can frustrate practical Capricorn. They will need to find a balance and appreciate each other's differences."
      }
    },
    
  "Scorpio": {
      compatible: ['Cancer', 'Virgo', 'Capricorn', 'Pisces', 'Scorpio'],
      incompatible: ['Leo', 'Aquarius'],
      startDate: 1023,
      compatibilityReport: {
        'Cancer': "Cancer's emotional depth pairs well with Scorpio's intensity. This combination can lead to a powerful and intense relationship.",
        'Virgo': "Scorpio's passion balances Virgo's analytical nature. They find a deep connection in their shared sense of dedication and sincerity.",
        'Capricorn': "Scorpio and Capricorn share a common determination and can achieve great things together. They have a deep understanding of each other's needs.",
        'Pisces': "Scorpio's protective nature finds solace in Pisces' empathetic spirit. Their relationship can reach deep emotional depths.",
        "Scorpio": "Two Scorpios form a passionate, intense, and transformative relationship. They share a deep understanding of each other`s complex nature. However, their shared intensity could lead to power struggles and emotional upheavals."
      },
      incompatibilityReport: {
        'Leo': "The stubbornness of both Scorpio and Leo can lead to power struggles. Mutual respect and compromise are vital to this relationship's success.",
        'Aquarius': "Scorpio's intense emotions may be overwhelming for the independent Aquarius. They need to work towards understanding their emotional differences."
      }
    },
    "Sagittarius": {
      compatible: ['Aries', 'Leo', 'Libra', 'Aquarius', 'Sagittarius'],
      incompatible: ['Virgo', 'Pisces'],
      startDate: 1122,
      compatibilityReport: {
        'Aries': "Sagittarius and Aries share a passion for adventure. They love to explore and experience life to the fullest together.",
        'Leo': "Leo's confidence and Sagittarius' optimism make for a dynamic duo. Their relationship is characterized by positivity and adventure.",
        'Libra': "Libra's diplomacy complements Sagittarius' straightforwardness. They find common ground in their mutual love for intellectual and cultural pursuits.",
        'Aquarius': "Sagittarius and Aquarius share a love for freedom and intellectual exploration. They are both independent and cherish their shared interests.",
        "Sagittarius": "A relationship between two Sagittarius individuals is full of laughter, adventure, and excitement. They understand each other`s need for freedom and exploration. However, they both struggle with commitment and may need to work on grounding their relationship."
      },
      incompatibilityReport: {
        'Virgo': "Sagittarius' thirst for adventure may feel overwhelming to methodical Virgo. They need to respect their differences and learn from each other.",
        'Pisces': "Sagittarius' straightforwardness can be hurtful to sensitive Pisces. Mutual understanding and compassion are essential in this relationship."
      }
    },
    "Capricorn": {
      compatible: ['Taurus', 'Virgo', 'Scorpio', 'Pisces', 'Capricorn'],
      incompatible: ['Aries', 'Libra'],
      startDate: 1222,
      compatibilityReport: {
        'Taurus': "Taurus and Capricorn both value stability and practicality. They find comfort and reliability in each other's company.",
        'Virgo': "Capricorn's ambition is complemented by Virgo's attention to detail. They form a powerful duo that achieves their common goals.",
        'Scorpio': "Scorpio's passion meets Capricorn's determination. They form a dynamic relationship that is both deep and fulfilling.",
        'Pisces': "Pisces' empathetic nature softens Capricorn's practicality. They form a balanced and compassionate relationship.",
        "Capricorn":  "Two Capricorns together form a relationship based on mutual respect and admiration. They share a common goal of stability and financial security. However, their shared serious nature could lead to them forgetting to relax and enjoy life."
      },
      incompatibilityReport: {
        'Aries': "Capricorn's need for order can conflict with Aries' love for freedom. They need to respect each other's differences and learn to compromise.",
        'Libra': "Capricorn's pragmatism can feel restrictive to the balance-loving Libra. Mutual understanding and respect are key to their relationship."
      }
    },
    "Aquarius": {
      compatible: ['Gemini', 'Libra', 'Sagittarius', 'Aries', 'Aquarius'],
      incompatible: ['Taurus', 'Scorpio'],
      startDate: 120,
      compatibilityReport: {
        'Gemini': "Gemini's adaptability complements Aquarius' innovative spirit. Their shared curiosity makes for a dynamic and exciting relationship.",
        'Libra': "Libra's diplomacy balances Aquarius' rebellious streak. They share a mutual understanding and a love for socializing.",
        'Sagittarius': "Sagittarius' optimism aligns with Aquarius' forward-thinking nature. They form an enthusiastic and vibrant partnership.",
        'Aries': "Aries' energy resonates with Aquarius' innovative spirit. They share a love for freedom and independence.",
  "Aquarius": "An Aquarius with another Aquarius creates a unique bond full of intellectual conversations, innovative ideas, and an understanding of each other`s need for independence. However, they may struggle with emotional intimacy and expressing their feelings in a traditional way."
      },
      incompatibilityReport: {
        'Taurus': "Aquarius' need for change can clash with Taurus' love for stability. They need to appreciate and understand their differences.",
        'Scorpio': "Aquarius' detachment can feel cold to passionate Scorpio. Mutual understanding and respect are essential in this relationship."
      }
    },
    "Pisces": {
      compatible: ['Cancer', 'Scorpio', 'Capricorn', 'Taurus', 'Pisces'],
      incompatible: ['Gemini', 'Sagittarius'],
      startDate: 219,
      compatibilityReport: {
        'Cancer': "Cancer's nurturing nature is soothing to the empathetic Pisces. They form a deep emotional bond that can be truly fulfilling.",
        'Scorpio': "Scorpio's intensity resonates with Pisces' emotional depth. They form a powerful duo that can achieve emotional healing.",
        'Capricorn': "Capricorn's practicality provides a grounding influence for dreamy Pisces. They find a balance that is both nurturing and supportive.",
        'Taurus': "Taurus' stability is comforting to the sensitive Pisces. They find in each other a safe space that is nurturing and secure.",
  "Pisces": "Two Pisces together create a deeply emotional, intuitive, and spiritual bond. They understand each other`s sensitivity and need for emotional support. However, they may both struggle with practical matters and grounding their relationship in reality."
      },
      incompatibilityReport: {
        'Gemini': "Pisces' emotional nature can be overwhelming for the logical Gemini. They need to understand and respect their differences.",
        'Sagittarius': "Sagittarius' frankness can be hurtful to sensitive Pisces. Mutual understanding and empathy are essential in this relationship."
      }
    }
  };

module.exports = zodiacData;