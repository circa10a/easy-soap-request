# 3.0.0(2019-10-01)

## Changed

- Changed format of input parameters from positional to object to follow traditional javascript library patterns.

**Old format of input parameters:**

```javascript
const { response } = await soapRequest(url, headers, xml, 1000);
```

**New format of input parameters:**

```javascript
const { response } = await soapRequest({ url: url, headers: headers, xml: xml, timeout: 1000 });
```

## Updated

- Dependencies

## Added

- Added changelog(#24)
