// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class TreeherderEvents extends Client {
  constructor(options = {}) {
    super({
      serviceName: 'treeherder',
      serviceVersion: 'v1',
      exchangePrefix: 'exchange/taskcluster-treeherder/v1/',
      ...options,
    });
  }
  /* eslint-disable max-len */
  // When a task run is scheduled or resolved, a message is posted to
  // this exchange in a Treeherder consumable format.
  /* eslint-enable max-len */
  jobs(pattern) {
    const entry = {"exchange":"jobs","name":"jobs","routingKey":[{"multipleWords":false,"name":"destination","required":true},{"multipleWords":false,"name":"project","required":true},{"multipleWords":true,"name":"reserved","required":false}],"schema":"v1/pulse-job.json#","type":"topic-exchange"}; // eslint-disable-line

    return this.normalizePattern(entry, pattern);
  }
}