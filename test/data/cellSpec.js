import {Dimension} from '../../src/data/dimension';
import {DimensionValue} from '../../src/data/dimensionValue';
import {Cell} from '../../src/data/cell';

describe('Cell', function() {
    it('constructor', function() {
        let dimensionValue = new DimensionValue('dv'),
            dimensionValues = new Map();
        dimensionValues.set('d', dimensionValue);
        let cell = new Cell(dimensionValues, 10);

        expect(cell.dimensionValues).toBe(dimensionValues);
        expect(cell.value).toBe(10);
    });

    it('getter dimension value', function() {
        let dimension = new Dimension('d'),
            dimensionValue = new DimensionValue('dv'),
            dimensionValues = new Map();
        dimensionValues.set('d', dimensionValue);
        let cell = new Cell(dimensionValues, 10);

        expect(cell.getDimensionValue(dimension)).toBe(dimensionValue);
    });
});
