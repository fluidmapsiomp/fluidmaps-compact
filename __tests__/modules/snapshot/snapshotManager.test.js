import MapboxGL from '../../../src';

describe('snapshotManager', () => {
  it('should resolve uri', async () => {
    const options = { centerCoordinate: [1, 2] };
    const uri = await MapboxGL.snapshotManager.takeSnap(options);
    expect(uri).toEqual('file://test.png');
  });
  it('should NOT resolve uri', async () => {
    const options = { centerCoordinate: [100, 200] };
    const uri = await MapboxGL.snapshotManager.takeSnap(options);
    expect(uri).toEqual(null);
  });

  
});
