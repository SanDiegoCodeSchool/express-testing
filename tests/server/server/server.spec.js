const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../server/app');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Server app', function mocha() {

  it('GET / responds with a 200 response code', () =>
    chai.request(app)
      .get('/')
        .then((res) => {
          expect(res).to.have.status(200);
        })
  );

  it('GET /test responds with 404 message', () =>
    chai.request(app)
      .get('/test')
        .then(res => expect(res).to.have.status(404))
    );
});
