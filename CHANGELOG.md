# 4.6.0(2022-01-18)

- Update Axios vesion 0.25.0

# 4.5.0(2021-12-01)

- Update Axios vesion 0.24.0

# 4.4.0(2021-10-17)

- Update Axios vesion 0.23.0

# 4.3.0(2021-10-10)

- Update Axios vesion 0.22.0

# 4.2.0(2021-09-06)

- Update Axios vesion 0.21.3

# 4.1.3(2021-03-17)

- Support overriding http method

# 4.1.2(2021-01-05)

- Update axios to v0.21.1

# 4.1.1(2020-12-11)

- Switch to github actions

# 4.0.1(2020-12-03)

- Remove logging from deno module

# 4.0.0(2020-12-01)

- Remove logging

# 3.5.0(2020-11-01)

- Update to axios v0.21
- Update webpack to v5

# 3.4.0(2020-09-08)

Update to axios v0.20

# 3.3.3(2020-08-12)

Update deps, fix deno tests again.

# 3.3.2(2020-07-01)

Fix deno tests

# 3.3.1(2020-04-26)

Update docs to point to deno.land for easy-soap-request deno module instead of github

# 3.3.0(2020-04-25)

## Added

### Deno support

- [#36] (https://github.com/circa10a/easy-soap-request/issues/36)

# 3.2.2(2020-04-08)

## Updated

Update dependencies

# 3.2.1 (2020-03-13)

## Fixed

- [#32] (https://github.com/circa10a/easy-soap-request/pull/32)

# 3.2.0 (2019-10-19)

## Fixed

- [#29] (https://github.com/circa10a/easy-soap-request/issues/29)

# 3.1.0(2019-10-09)

## Added

- Added `maxContentLength` parameter default of `Infinity`. See [axios docs](https://github.com/axios/axios#request-config)
- Added `extraOpts` parameter that can be used to pass more config options for axios so a library update frequency is lower

## Fixed

- [#27](https://github.com/circa10a/easy-soap-request/issues/27)

# 3.0.1(2019-10-02)

## Changed

- Fix typo in docs

# 3.0.0(2019-10-01)

## Changed

- Changed format of input parameters from positional to object to follow traditional javascript library patterns.

**Old format of input parameters:**

```javascript
const { response } = await soapRequest(url, headers, xml, 1000);
```

**New format of input parameters:**

```javascript
const { response } = await soapRequest({
  url: url,
  headers: headers,
  xml: xml,
  timeout: 1000,
});
```

## Updated

- Dependencies

## Added

- Added changelog(#24)
