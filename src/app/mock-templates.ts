import { Template } from './template';
import { Section } from './section';
import { Exercise } from './exercise';
import { Option } from './option';

export const TEMPLATES: Template[] = [
  { id: 1, 
    name: 'Test1', 
    desc:  '',
    creatorId: 123,
    sections: [
      { name: "Max Effort Lift",
        desc: "Max out boi",
        shouldSuperset: false,
        exercises: [
          { name: "Lift Options",
            options: [
              { name: 'Flat Bench Press',
                desc: '',
                setRange: [-1,-1],
                repRange: [1, 5]
              }
            ]
          }
        ]
       }
    ]
  },
  { id: 2, 
    name: 'Test2',
    desc:  '',
    creatorId: 123,
    sections: new Array<Section>()
  }
];