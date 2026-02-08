const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Quiz = require('./models/Quiz');
const Article = require('./models/Article');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected for seeding'))
    .catch((error) => console.log('MongoDB connection error:', error));

// Quiz Data
const quizzes = [
  {
    category: 'Climate Change',
    categoryId: 'climate-change',
    title: 'Climate Change Basics Quiz',
    questions: [
      {
        question: 'What is the primary greenhouse gas responsible for climate change?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        answer: 'Carbon Dioxide'
      },
      {
        question: 'What is the Paris Agreement?',
        options: [
          'A trade agreement',
          'An international treaty on climate change',
          'A peace treaty',
          'A cultural exchange program'
        ],
        answer: 'An international treaty on climate change'
      },
      {
        question: 'Which of these contributes most to global warming?',
        options: ['Volcanic eruptions', 'Burning fossil fuels', 'Solar flares', 'Ocean currents'],
        answer: 'Burning fossil fuels'
      },
      {
        question: 'What percentage of climate scientists agree that climate change is caused by human activities?',
        options: ['50%', '70%', '90%', 'Over 97%'],
        answer: 'Over 97%'
      },
      {
        question: 'What is the average global temperature increase target set by the Paris Agreement?',
        options: ['Below 1.5°C', 'Below 2°C', 'Below 3°C', 'Below 5°C'],
        answer: 'Below 2°C'
      },
      {
        question: 'Which sector is the largest emitter of greenhouse gases globally?',
        options: ['Transportation', 'Agriculture', 'Energy production', 'Manufacturing'],
        answer: 'Energy production'
      },
      {
        question: 'What is the greenhouse effect?',
        options: [
          'Growing plants in greenhouses',
          'Trapping of heat in Earth\'s atmosphere',
          'Effect of green plants on climate',
          'Solar energy absorption'
        ],
        answer: 'Trapping of heat in Earth\'s atmosphere'
      },
      {
        question: 'Which gas has the highest global warming potential?',
        options: ['Carbon dioxide', 'Methane', 'Sulfur hexafluoride', 'Nitrous oxide'],
        answer: 'Sulfur hexafluoride'
      }
    ]
  },
  {
    category: 'Recycling',
    categoryId: 'recycling',
    title: 'Recycling Knowledge Quiz',
    questions: [
      {
        question: 'How many times can glass be recycled?',
        options: ['Once', '5 times', '10 times', 'Infinitely'],
        answer: 'Infinitely'
      },
      {
        question: 'What is the recycling symbol with number 1 in the middle?',
        options: ['HDPE', 'PET', 'PVC', 'LDPE'],
        answer: 'PET'
      },
      {
        question: 'How much energy does recycling aluminum save compared to making new aluminum?',
        options: ['25%', '50%', '75%', 'Up to 95%'],
        answer: 'Up to 95%'
      },
      {
        question: 'Which item should NOT go in your recycling bin?',
        options: ['Cardboard boxes', 'Pizza boxes with grease', 'Glass bottles', 'Aluminum cans'],
        answer: 'Pizza boxes with grease'
      },
      {
        question: 'What percentage of plastic ever produced has been recycled?',
        options: ['Less than 10%', '25%', '50%', '75%'],
        answer: 'Less than 10%'
      },
      {
        question: 'How long does it take for a plastic bottle to decompose?',
        options: ['10 years', '50 years', '100 years', '450 years'],
        answer: '450 years'
      },
      {
        question: 'What does the term "downcycling" mean?',
        options: [
          'Recycling less frequently',
          'Converting waste into new materials of lesser quality',
          'Recycling downhill',
          'Reducing recycling rates'
        ],
        answer: 'Converting waste into new materials of lesser quality'
      },
      {
        question: 'Which country has the highest recycling rate in the world?',
        options: ['USA', 'Germany', 'Japan', 'Sweden'],
        answer: 'Germany'
      }
    ]
  },
  {
    category: 'Renewable Energy',
    categoryId: 'renewable-energy',
    title: 'Renewable Energy Quiz',
    questions: [
      {
        question: 'Which is NOT a renewable energy source?',
        options: ['Solar', 'Wind', 'Natural Gas', 'Hydroelectric'],
        answer: 'Natural Gas'
      },
      {
        question: 'What percentage of global electricity came from renewables in 2023?',
        options: ['10%', '20%', 'About 30%', '50%'],
        answer: 'About 30%'
      },
      {
        question: 'Which country produces the most solar energy?',
        options: ['USA', 'Germany', 'China', 'India'],
        answer: 'China'
      },
      {
        question: 'What is the largest source of renewable energy worldwide?',
        options: ['Solar', 'Wind', 'Hydropower', 'Geothermal'],
        answer: 'Hydropower'
      },
      {
        question: 'How long does it take for a solar panel to pay for itself in energy savings?',
        options: ['1-2 years', '3-7 years', '10-15 years', '20-25 years'],
        answer: '3-7 years'
      },
      {
        question: 'What is biomass energy?',
        options: [
          'Energy from muscles',
          'Energy from living or recently living organisms',
          'Energy from minerals',
          'Energy from water'
        ],
        answer: 'Energy from living or recently living organisms'
      },
      {
        question: 'Which renewable energy source is most efficient?',
        options: ['Solar panels (15-20%)', 'Wind turbines (35-45%)', 'Hydroelectric (90%)', 'Geothermal (50%)'],
        answer: 'Hydroelectric (90%)'
      },
      {
        question: 'What is a major disadvantage of wind energy?',
        options: [
          'Very expensive',
          'Produces greenhouse gases',
          'Intermittent availability',
          'Limited locations'
        ],
        answer: 'Intermittent availability'
      }
    ]
  },
  {
    category: 'Water Conservation',
    categoryId: 'water-conservation',
    title: 'Water Conservation Quiz',
    questions: [
      {
        question: 'What percentage of Earth\'s water is freshwater?',
        options: ['1%', '3%', '10%', '25%'],
        answer: '3%'
      },
      {
        question: 'How much water does a 5-minute shower use on average?',
        options: ['10-15 gallons', '25-50 gallons', '50-75 gallons', '100 gallons'],
        answer: '25-50 gallons'
      },
      {
        question: 'Which uses more water?',
        options: ['Washing dishes by hand', 'Using a dishwasher', 'Both use the same', 'Neither uses water'],
        answer: 'Washing dishes by hand'
      },
      {
        question: 'What percentage of household water is used outdoors?',
        options: ['10%', '20%', '30%', '50%'],
        answer: '30%'
      },
      {
        question: 'How much water can a dripping faucet waste per day?',
        options: ['1 gallon', '5 gallons', '20 gallons', '50 gallons'],
        answer: '20 gallons'
      },
      {
        question: 'What is greywater?',
        options: [
          'Polluted water',
          'Rainwater',
          'Gently used water from sinks and showers',
          'Ocean water'
        ],
        answer: 'Gently used water from sinks and showers'
      },
      {
        question: 'Which appliance uses the most water in a typical home?',
        options: ['Dishwasher', 'Washing machine', 'Toilet', 'Shower'],
        answer: 'Toilet'
      },
      {
        question: 'How many gallons of water does it take to produce one pound of beef?',
        options: ['100 gallons', '500 gallons', '1,800 gallons', '5,000 gallons'],
        answer: '1,800 gallons'
      }
    ]
  },
  {
    category: 'Ocean',
    categoryId: 'ocean',
    title: 'Ocean Conservation Quiz',
    questions: [
      {
        question: 'What percentage of Earth\'s surface is covered by oceans?',
        options: ['50%', '60%', '71%', '80%'],
        answer: '71%'
      },
      {
        question: 'What is the Great Pacific Garbage Patch?',
        options: [
          'A landfill near the Pacific',
          'A collection of marine debris in the North Pacific Ocean',
          'A recycling facility',
          'An island made of trash'
        ],
        answer: 'A collection of marine debris in the North Pacific Ocean'
      },
      {
        question: 'How much plastic enters the ocean every year?',
        options: ['1 million tons', '5 million tons', '8-10 million tons', '20 million tons'],
        answer: '8-10 million tons'
      },
      {
        question: 'What is coral bleaching?',
        options: [
          'Natural color change in corals',
          'Death of algae living in coral due to stress',
          'Cleaning process for corals',
          'Coral reproduction'
        ],
        answer: 'Death of algae living in coral due to stress'
      },
      {
        question: 'What percentage of oxygen does the ocean produce?',
        options: ['10%', '30%', 'At least 50%', '90%'],
        answer: 'At least 50%'
      },
      {
        question: 'Which is the deepest point in the ocean?',
        options: ['Puerto Rico Trench', 'Java Trench', 'Mariana Trench', 'Tonga Trench'],
        answer: 'Mariana Trench'
      },
      {
        question: 'What is ocean acidification caused by?',
        options: [
          'Salt water',
          'Absorption of CO2 from the atmosphere',
          'Marine animals',
          'Ocean currents'
        ],
        answer: 'Absorption of CO2 from the atmosphere'
      },
      {
        question: 'By what year could there be more plastic than fish in the ocean by weight?',
        options: ['2030', '2040', '2050', '2100'],
        answer: '2050'
      }
    ]
  },
  {
    category: 'Carbon Footprint',
    categoryId: 'carbon-footprint',
    title: 'Carbon Footprint Quiz',
    questions: [
      {
        question: 'What is a carbon footprint?',
        options: [
          'Footprint made of carbon',
          'Total greenhouse gas emissions caused by an individual or organization',
          'Carbon in the soil',
          'Fossil fuel reserves'
        ],
        answer: 'Total greenhouse gas emissions caused by an individual or organization'
      },
      {
        question: 'What is the average carbon footprint per person in the US?',
        options: ['5 tons', '10 tons', '16 tons', '25 tons'],
        answer: '16 tons'
      },
      {
        question: 'Which food has the highest carbon footprint?',
        options: ['Chicken', 'Beef', 'Vegetables', 'Fish'],
        answer: 'Beef'
      },
      {
        question: 'What is the recommended global average carbon footprint to combat climate change?',
        options: ['Under 1 ton', 'Under 2 tons', 'Under 5 tons', 'Under 10 tons'],
        answer: 'Under 2 tons'
      },
      {
        question: 'Which transportation method has the lowest carbon footprint per passenger?',
        options: ['Car', 'Airplane', 'Train', 'Bus'],
        answer: 'Train'
      },
      {
        question: 'How much can reducing meat consumption reduce your carbon footprint?',
        options: ['5%', '10%', 'Up to 20%', 'Up to 50%'],
        answer: 'Up to 50%'
      },
      {
        question: 'What is carbon offsetting?',
        options: [
          'Reducing carbon emissions',
          'Compensating for emissions by funding carbon reduction projects',
          'Removing carbon from products',
          'Planting trees only'
        ],
        answer: 'Compensating for emissions by funding carbon reduction projects'
      },
      {
        question: 'Which household activity typically has the largest carbon footprint?',
        options: ['Cooking', 'Heating and cooling', 'Watching TV', 'Using appliances'],
        answer: 'Heating and cooling'
      }
    ]
  },
  {
    category: 'Environment',
    categoryId: 'environment',
    title: 'Environmental Science Quiz',
    questions: [
      {
        question: 'What is biodiversity?',
        options: [
          'Study of biology',
          'Variety of life in a particular habitat',
          'Number of species in a zoo',
          'Evolution of species'
        ],
        answer: 'Variety of life in a particular habitat'
      },
      {
        question: 'What is deforestation?',
        options: [
          'Planting more trees',
          'Natural forest fires',
          'Clearing forests for other land uses',
          'Forest management'
        ],
        answer: 'Clearing forests for other land uses'
      },
      {
        question: 'How much of the Amazon rainforest has been lost in the last 50 years?',
        options: ['5%', '10%', '17%', '30%'],
        answer: '17%'
      },
      {
        question: 'What is the ozone layer?',
        options: [
          'Layer of oxygen',
          'Layer that protects Earth from UV radiation',
          'Bottom layer of atmosphere',
          'Layer of clouds'
        ],
        answer: 'Layer that protects Earth from UV radiation'
      },
      {
        question: 'What is composting?',
        options: [
          'Burning waste',
          'Breaking down organic waste into nutrient-rich soil',
          'Recycling plastic',
          'Filtering water'
        ],
        answer: 'Breaking down organic waste into nutrient-rich soil'
      },
      {
        question: 'Which is NOT a major environmental issue?',
        options: ['Air pollution', 'Soil erosion', 'Cryptocurrency mining', 'Loss of biodiversity'],
        answer: 'Cryptocurrency mining'
      },
      {
        question: 'What percentage of species are at risk of extinction?',
        options: ['5%', '10%', '25%', '50%'],
        answer: '25%'
      },
      {
        question: 'What is sustainable development?',
        options: [
          'Building more sustainably',
          'Development that meets present needs without compromising future generations',
          'Only using renewable energy',
          'Stopping all development'
        ],
        answer: 'Development that meets present needs without compromising future generations'
      }
    ]
  },
  {
    category: 'Animals',
    categoryId: 'animals',
    title: 'Wildlife Conservation Quiz',
    questions: [
      {
        question: 'How many species are estimated to exist on Earth?',
        options: ['1 million', '3 million', '5 million', '8.7 million'],
        answer: '8.7 million'
      },
      {
        question: 'What is the main cause of animal extinction today?',
        options: [
          'Natural disasters',
          'Habitat loss',
          'Disease',
          'Climate change alone'
        ],
        answer: 'Habitat loss'
      },
      {
        question: 'Which animal is NOT currently endangered?',
        options: ['Giant Panda', 'Snow Leopard', 'Domestic Cat', 'Mountain Gorilla'],
        answer: 'Domestic Cat'
      },
      {
        question: 'What percentage of all species that have ever lived are now extinct?',
        options: ['25%', '50%', '75%', 'Over 99%'],
        answer: 'Over 99%'
      },
      {
        question: 'What is the role of keystone species?',
        options: [
          'Most abundant species',
          'Species that have disproportionately large effect on their environment',
          'Largest species',
          'Fastest species'
        ],
        answer: 'Species that have disproportionately large effect on their environment'
      },
      {
        question: 'Which insect is responsible for pollinating about one-third of the food we eat?',
        options: ['Butterflies', 'Bees', 'Ants', 'Beetles'],
        answer: 'Bees'
      },
      {
        question: 'What is wildlife trafficking estimated to be worth annually?',
        options: ['$1 billion', '$5 billion', '$10-20 billion', '$50 billion'],
        answer: '$10-20 billion'
      },
      {
        question: 'Which African animal is most at risk due to poaching?',
        options: ['Lions', 'Elephants and Rhinos', 'Zebras', 'Giraffes'],
        answer: 'Elephants and Rhinos'
      }
    ]
  }
];

// Article Data
const articles = [
  {
    category: 'climate-change',
    title: 'Understanding Climate Change: Our Planet\'s Greatest Challenge',
    content: 'Climate change represents one of the most pressing challenges facing humanity today. The science is clear: human activities are warming the planet at an unprecedented rate.',
    sections: [
      {
        heading: 'What is Climate Change?',
        text: 'Climate change refers to long-term shifts in global temperatures and weather patterns. While climate change is a natural phenomenon, scientific evidence shows that human activities have been the dominant cause of warming since the mid-20th century.',
        imageUrl: '/images/climate-change.jpg'
      },
      {
        heading: 'The Science Behind It',
        text: 'Greenhouse gases like carbon dioxide trap heat in the atmosphere. The burning of fossil fuels, deforestation, and industrial processes have dramatically increased these gases, creating a "greenhouse effect" that warms the planet.',
      },
      {
        heading: 'Current Impacts',
        text: 'We are already experiencing the effects: rising sea levels, more frequent and severe weather events, melting polar ice, and disrupted ecosystems. These changes affect food security, water availability, and human health worldwide.',
      },
      {
        heading: 'Hope for the Future',
        text: 'While the challenge is significant, solutions exist. Renewable energy, sustainable practices, and international cooperation through agreements like the Paris Accord offer pathways to a sustainable future.',
      }
    ],
    tips: [
      'Reduce energy consumption by using LED bulbs and energy-efficient appliances',
      'Choose renewable energy sources when possible',
      'Reduce, reuse, and recycle to minimize waste',
      'Support policies and politicians committed to climate action',
      'Educate others about climate change and its solutions',
      'Consider your carbon footprint when making consumer choices'
    ],
  },
  {
    category: 'recycling',
    title: 'The Power of Recycling: Turning Waste into Resources',
    content: 'Recycling is one of the most effective ways individuals can contribute to environmental conservation. By transforming waste into valuable resources, we reduce pollution and conserve natural resources.',
    sections: [
      {
        heading: 'Why Recycling Matters',
        text: 'Every year, billions of tons of waste end up in landfills worldwide. Recycling reduces the need for raw materials, saves energy, and decreases greenhouse gas emissions. It also creates jobs and supports the circular economy.',
        imageUrl: '/images/recycling.jpeg'
      },
      {
        heading: 'What Can Be Recycled?',
        text: 'Common recyclable materials include paper, cardboard, glass, metal, and certain plastics. However, contamination is a major issue—items must be clean and properly sorted. Check your local recycling guidelines as they vary by location.',
      },
      {
        heading: 'The Recycling Process',
        text: 'Recyclables are collected, sorted, cleaned, and processed into raw materials. These materials are then used to manufacture new products. For example, recycled aluminum can become new cans in as little as 60 days.',
      },
      {
        heading: 'Beyond the Bin',
        text: 'Recycling is just one part of waste reduction. The most effective approach follows the 3 Rs: Reduce (buy less), Reuse (find new purposes for items), and Recycle. Reducing consumption should always be the first priority.',
      }
    ],
    tips: [
      'Learn your local recycling rules and follow them carefully',
      'Rinse containers before recycling to avoid contamination',
      'Break down cardboard boxes to save space',
      'Avoid "wishcycling"—don\'t recycle items you\'re not sure about',
      'Buy products made from recycled materials to support the market',
      'Compost organic waste instead of throwing it away'
    ],
  },
  {
    category: 'renewable-energy',
    title: 'Renewable Energy: Powering a Sustainable Future',
    content: 'Renewable energy sources offer clean, sustainable alternatives to fossil fuels. As technology advances and costs decrease, renewables are becoming increasingly viable for meeting global energy needs.',
    sections: [
      {
        heading: 'Types of Renewable Energy',
        text: 'Solar, wind, hydroelectric, geothermal, and biomass energy all harness natural processes to generate power. Each has unique advantages: solar panels work anywhere the sun shines, wind turbines generate power in breezy locations, and hydroelectric dams provide consistent baseline power.',
        imageUrl: '/images/renewable-energy.png'
      },
      {
        heading: 'Environmental Benefits',
        text: 'Unlike fossil fuels, renewable energy sources produce little to no greenhouse gas emissions during operation. They also reduce air and water pollution, preserve natural ecosystems, and don\'t deplete finite resources.',
      },
      {
        heading: 'Economic Advantages',
        text: 'The renewable energy sector is creating millions of jobs worldwide. The cost of solar and wind energy has decreased dramatically, making them competitive with or cheaper than fossil fuels in many regions. This trend is expected to continue.',
      },
      {
        heading: 'Challenges and Solutions',
        text: 'Intermittency (when the sun doesn\'t shine or wind doesn\'t blow) remains a challenge, but battery storage technology is rapidly improving. Grid modernization and diverse energy portfolios help ensure reliable power supply.',
      }
    ],
    tips: [
      'Consider installing solar panels if feasible for your home',
      'Choose energy providers that offer renewable energy options',
      'Support policies that incentivize renewable energy adoption',
      'Invest in energy-efficient appliances to reduce overall consumption',
      'Learn about community solar programs in your area',
      'Advocate for corporate renewable energy commitments'
    ],
  },
  {
    category: 'water-conservation',
    title: 'Water Conservation: Protecting Our Most Precious Resource',
    content: 'Water is essential for all life, yet freshwater is a limited resource. With growing populations and climate change affecting water availability, conservation has never been more critical.',
    sections: [
      {
        heading: 'The Water Crisis',
        text: 'Despite Earth being covered mostly by water, only 3% is freshwater, and much of that is frozen in glaciers. Over 2 billion people live in areas experiencing water scarcity. Climate change is intensifying droughts and making water management more challenging.',
        imageUrl: '/images/water-conservation.jpg'
      },
      {
        heading: 'Household Water Use',
        text: 'The average American uses 80-100 gallons of water daily. Toilets, showers, and washing machines are the biggest consumers. Simple changes in habits can significantly reduce water waste without sacrificing comfort or hygiene.',
      },
      {
        heading: 'Agricultural Impact',
        text: 'Agriculture accounts for 70% of global freshwater use. Water-intensive crops and livestock require enormous amounts of water. Supporting sustainable farming practices and making mindful food choices can help reduce agricultural water demand.',
      },
      {
        heading: 'Technology and Innovation',
        text: 'New technologies like drip irrigation, smart water meters, and drought-resistant crops are helping optimize water use. Desalination and water recycling are becoming more efficient, offering additional future water sources.',
      }
    ],
    tips: [
      'Fix leaky faucets and toilets immediately',
      'Take shorter showers and install low-flow showerheads',
      'Turn off the tap while brushing teeth or washing dishes',
      'Run dishwashers and washing machines only when full',
      'Water plants early morning or evening to reduce evaporation',
      'Choose drought-resistant native plants for landscaping',
      'Collect rainwater for outdoor use',
      'Reduce meat consumption to save water used in livestock production'
    ],
  },
  {
    category: 'ocean',
    title: 'Ocean Conservation: Protecting the Heart of Our Planet',
    content: 'Oceans cover 71% of Earth\'s surface and are vital to all life. They regulate climate, produce oxygen, provide food, and support incredible biodiversity. Yet human activities are threatening ocean health.',
    sections: [
      {
        heading: 'The Importance of Oceans',
        text: 'Oceans produce at least 50% of the planet\'s oxygen, absorb about 30% of carbon dioxide, and regulate global temperatures. They support millions of species and provide livelihoods for billions of people through fishing, tourism, and trade.',
        imageUrl: '/images/ocean.jpg'
      },
      {
        heading: 'Major Threats',
        text: 'Plastic pollution, overfishing, ocean acidification, and rising temperatures are damaging marine ecosystems. Eight million tons of plastic enter oceans annually, harming wildlife and entering food chains. Coral reefs, often called "rainforests of the sea," are especially vulnerable.',
      },
      {
        heading: 'Coral Bleaching',
        text: 'When water temperatures rise, corals expel the algae living in their tissues, causing them to turn white. Prolonged bleaching leads to coral death. Since the 1980s, half of the world\'s coral reefs have died, affecting entire marine ecosystems.',
      },
      {
        heading: 'Solutions and Hope',
        text: 'Marine protected areas, sustainable fishing practices, and plastic reduction initiatives are making a difference. Individual actions—from reducing plastic use to supporting sustainable seafood—collectively have significant impact.',
      }
    ],
    tips: [
      'Reduce single-use plastics, especially bottles and bags',
      'Choose sustainable seafood certified by organizations like MSC',
      'Never release balloons outdoors—they often end up in oceans',
      'Participate in beach cleanups',
      'Use reef-safe sunscreen to protect coral ecosystems',
      'Support organizations working on ocean conservation',
      'Properly dispose of fishing line and other marine debris',
      'Educate others about ocean conservation'
    ],
  },
  {
    category: 'carbon-footprint',
    title: 'Understanding Your Carbon Footprint: A Path to Sustainability',
    content: 'Your carbon footprint represents the total greenhouse gas emissions caused by your actions. Understanding and reducing it is crucial for combating climate change.',
    sections: [
      {
        heading: 'What Makes Up Your Carbon Footprint?',
        text: 'Your carbon footprint includes emissions from transportation, home energy use, food consumption, purchases, and waste. Everything from driving a car to buying new clothes contributes to your total footprint.',
        imageUrl: '/images/carbon-footprint.jpg'
      },
      {
        heading: 'Transportation Emissions',
        text: 'Transportation is often the largest component of individual carbon footprints. Cars, planes, and other vehicles burn fossil fuels, releasing CO2. A single round-trip flight across the US produces about 2 tons of CO2 per passenger.',
      },
      {
        heading: 'Food and Diet',
        text: 'Food production, especially meat and dairy, generates significant emissions. Beef production is particularly carbon-intensive, requiring massive amounts of land, water, and feed. Plant-based diets generally have much lower carbon footprints.',
      },
      {
        heading: 'Taking Action',
        text: 'Small changes add up. Walking or biking instead of driving, eating less meat, buying secondhand, and reducing energy consumption at home all lower your carbon footprint. Carbon offsetting can help neutralize remaining emissions.',
      }
    ],
    tips: [
      'Calculate your carbon footprint using online calculators',
      'Use public transportation, carpool, or bike when possible',
      'Reduce meat consumption, especially beef',
      'Buy local and seasonal produce',
      'Choose energy-efficient appliances and LED lighting',
      'Avoid fast fashion—buy quality items that last',
      'Minimize air travel or choose carbon offsets',
      'Support renewable energy through your utility provider'
    ],
  },
  {
    category: 'environment',
    title: 'Environmental Conservation: Protecting Our Natural World',
    content: 'Environmental conservation encompasses the protection and preservation of our natural world. From forests to wetlands, healthy ecosystems are essential for human survival and wellbeing.',
    sections: [
      {
        heading: 'Biodiversity Matters',
        text: 'Biodiversity—the variety of life on Earth—is declining at alarming rates. Species extinction is occurring 1,000 times faster than natural rates. This loss threatens ecosystem stability and the services they provide, from pollination to water purification.',
        imageUrl: '/images/environment.jpg'
      },
      {
        heading: 'Forests: Earth\'s Lungs',
        text: 'Forests absorb CO2, produce oxygen, regulate water cycles, and house 80% of terrestrial species. Yet deforestation continues, driven by agriculture, logging, and development. The Amazon rainforest alone has lost 17% of its forest cover in the last 50 years.',
      },
      {
        heading: 'Soil Health',
        text: 'Healthy soil is vital for food production, water filtration, and carbon storage. Industrial agriculture, chemical use, and erosion degrade soil quality. It can take centuries to form just an inch of topsoil, yet current practices are depleting it rapidly.',
      },
      {
        heading: 'Wetlands and Water',
        text: 'Wetlands act as natural water filters, flood buffers, and carbon sinks. They support incredible biodiversity but have been drained and filled for development. Protecting and restoring wetlands provides multiple environmental and economic benefits.',
      }
    ],
    tips: [
      'Support organizations that protect natural habitats',
      'Choose products that don\'t contribute to deforestation',
      'Plant native species in your garden to support local wildlife',
      'Avoid pesticides and herbicides that harm beneficial insects',
      'Volunteer for local conservation projects',
      'Practice Leave No Trace principles when enjoying nature',
      'Support sustainable agriculture and organic farming',
      'Advocate for protected areas and wildlife corridors'
    ],
  },
  {
    category: 'animals',
    title: 'Wildlife Conservation: Protecting Earth\'s Incredible Biodiversity',
    content: 'Wildlife conservation focuses on protecting animal species and their habitats. From tiny insects to massive elephants, every species plays a role in maintaining ecological balance.',
    sections: [
      {
        heading: 'The Extinction Crisis',
        text: 'We are living through the sixth mass extinction, the first caused by human activity. Scientists estimate that dozens of species go extinct every day. Habitat destruction, climate change, pollution, poaching, and invasive species are primary threats.',
        imageUrl: '/images/animals.jpg'
      },
      {
        heading: 'Keystone Species',
        text: 'Keystone species have disproportionate effects on their ecosystems. Wolves control deer populations, preventing overgrazing. Bees pollinate crops and wild plants. Sea otters maintain kelp forests. Losing these species can cause ecosystem collapse.',
      },
      {
        heading: 'The Importance of Insects',
        text: 'Insects are often overlooked but are crucial for ecosystems. They pollinate plants, decompose organic matter, and serve as food for other animals. Insect populations are declining rapidly, threatening food security and ecosystem health.',
      },
      {
        heading: 'Success Stories',
        text: 'Conservation works! Giant pandas, humpback whales, and bald eagles have rebounded from near extinction. Protected areas, breeding programs, and anti-poaching efforts save species. Individual actions and policy changes make a real difference.',
      }
    ],
    tips: [
      'Support wildlife conservation organizations',
      'Never buy products made from endangered species',
      'Create wildlife-friendly spaces in your yard',
      'Keep cats indoors to protect birds and small mammals',
      'Reduce pesticide use to protect insects and pollinators',
      'Report wildlife crimes and suspected poaching',
      'Choose sustainable seafood to protect marine life',
      'Visit and support national parks and wildlife refuges',
      'Educate children about respecting wildlife'
    ],
  }
];

// Seed function
async function seedDatabase() {
  try {
    // Clear existing data
    await Quiz.deleteMany({});
    await Article.deleteMany({});
    console.log('Cleared existing data');

    // Insert quizzes
    await Quiz.insertMany(quizzes);
    console.log('✅ Quizzes seeded successfully');

    // Insert articles
    await Article.insertMany(articles);
    console.log('✅ Articles seeded successfully');

    console.log('\n🎉 Database seeded successfully!');
    console.log(`- ${quizzes.length} quizzes added`);
    console.log(`- ${articles.length} articles added`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();
