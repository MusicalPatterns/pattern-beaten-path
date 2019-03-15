import { InputType, RangedInputType, standardConfigurations } from '@musical-patterns/pattern'
import { from, Units } from '@musical-patterns/utilities'
import { from as beatenPathFrom } from '../nominals'
import { BEATEN_PATH_MINIMUM_FUNCTIONAL_CORE, BEATEN_PATH_MINIMUM_FUNCTIONAL_ENTITY_COUNT } from './constants'
import { BeatenPathConfigurations, BeatenPathStyle } from './types'

const configurations: BeatenPathConfigurations = {
    ...standardConfigurations,
    core: {
        constraint: {
            integer: true,
            min: beatenPathFrom.Core(BEATEN_PATH_MINIMUM_FUNCTIONAL_CORE),
        },
        description: `every bar will consist of a harmony and polyrhythm of this value against itself \
either plus or minus 1`,
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        order: 1,
    },
    entityCount: {
        constraint: {
            integer: true,
            min: from.Cardinal(BEATEN_PATH_MINIMUM_FUNCTIONAL_ENTITY_COUNT),
        },
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        order: 2,
    },
    repetitions: {
        constraint: {
            integer: true,
            min: 1,
        },
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        order: 4,
        units: Units.BARS,
    },
    reverse: {
        inputType: InputType.TOGGLED,
        order: 5,
    },
    style: {
        constraint: [
            {
                order: 1,
                value: BeatenPathStyle.POLYRHYTHMIC,
            },
            {
                order: 2,
                value: BeatenPathStyle.SMOOTH,
            },
        ],
        inputType: InputType.OPTIONED,
        order: 3,
    },
}

export {
    configurations,
}