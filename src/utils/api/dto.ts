import _ from 'lodash';

export const dto = <Data>(data: Data): DTONested<Data> => {
  if (_.isArray(data)) {
    return _.map(data, dto) as DTONested<Data>;
  }

  if (_.isObject(data)) {
    return _(data)
      .mapKeys((v, k) => _.camelCase(k))
      .mapValues((v, k) => dto(v))
      .value() as DTONested<Data>;
  }

  return data as DTONested<Data>;
};
