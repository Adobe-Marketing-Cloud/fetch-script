import fetchScript from '../fetch-script';

const FIXTURES_BASE_PATH = 'base';

describe('Fet script module specifications', function() {
  const fetch = fetchScript();

  it('should catch error when loading a non existing file', function(done) {
    fetch('non-existing.js')
    .then(res => {
      fail('Script loading should fail')
      done();
    })
    .catch(err => {
      expect(err).toBeTruthy();
      done();
    });
  });

  it('should return status OK when loading an existing file', function(done) {
    fetch(`${FIXTURES_BASE_PATH}/fixtures/existing.js`)
    .then(res => {
      expect(res.ok).toBeTruthy();
      expect(window.dummy).toBe(1);
      done();
    })
    .catch(err => {
      fail('It should not fail');
      done();
    });
  });
});
