## cpu

The system CPU information.

Example:

```json
{
  manufacturer: 'Apple',
  brand: 'M1 Max',
  vendor: 'Apple',
  family: '458787763',
  model: '',
  stepping: '5',
  revision: '',
  voltage: '',
  speed: 2.4,
  speedMin: 2.4,
  speedMax: 2.4,
  governor: '',
  cores: 10,
  physicalCores: 10,
  performanceCores: 8,
  efficiencyCores: 2,
  processors: 1,
  socket: 'SOC',
  flags: '',
  virtualization: true,
  cache: { l1d: 131072, l1i: 65536, l2: 4194304, l3: null }
}
```


## osInfo

Detailed OS info.

Example:

```json
{
  platform: 'darwin',
  distro: 'macOS',
  release: '13.5.2',
  codename: 'macOS Ventura',
  kernel: '22.6.0',
  arch: 'arm64',
  hostname: 'xs-MacBook-Pro.lan',
  fqdn: 'xs-MacBook-Pro.lan',
  codepage: 'UTF-8',
  logofile: 'darwin',
  serial: 'E88B0B04-7B4D-3E52-8980-A19ED82304F7',
  build: '22G91',
  servicepack: '',
  uefi: true
}
```

## audio

Audio device info.

Example:

```json

[
  {
    id: 0,
    name: 'MacBook Pro Microphone',
    manufacturer: 'Apple Inc.',
    revision: null,
    driver: null,
    default: true,
    channel: 'Built-In',
    type: 'Phone',
    in: true,
    out: false,
    status: 'online'
  },
  {
    id: 1,
    name: 'MacBook Pro Speakers',
    manufacturer: 'Apple Inc.',
    revision: null,
    driver: null,
    default: true,
    channel: 'Built-In',
    type: 'Speaker',
    in: false,
    out: true,
    status: 'online'
  },
  {
    id: 2,
    name: 'MorphVOX Audio',
    manufacturer: 'Screaming Bee Inc',
    revision: null,
    driver: null,
    default: false,
    channel: '',
    type: 'Speaker',
    in: true,
    out: true,
    status: 'online'
  }
]
```

## time

Current time info.

Example:

```json
{
  current: 1712297767161,
  uptime: 749287,
  timezone: 'GMT-0400',
  timezoneName: 'America/New_York'
}
```

## mem

Current system memory info.

Example:

```json
{
  total: 68719476736,
  free: 3659661312,
  used: 65059815424,
  active: 21395816448,
  available: 47323660288,
  buffers: 0,
  cached: 0,
  slab: 0,
  buffcache: 43663998976,
  swaptotal: 19327352832,
  swapused: 18032036413.44,
  swapfree: 1295316418.56,
  writeback: null,
  dirty: null
}
```

## battery

The current system battery status.

Example:

```json
{
  hasBattery: true,
  cycleCount: 189,
  isCharging: false,
  designedCapacity: 109414,
  maxCapacity: 88422,
  currentCapacity: 87692,
  voltage: 12.585,
  capacityUnit: 'mWh',
  percent: 100,
  timeRemaining: 0,
  acConnected: true,
  type: 'Li-ion',
  model: '',
  manufacturer: 'Apple',
  serial: ''
}
```

## load

The current system load info.

Example:

```json
{
  avgLoad: 2.48,
  currentLoad: 52.666666666666664,
  currentLoadUser: 26.444444444444443,
  currentLoadSystem: 26.222222222222225,
  currentLoadNice: 0,
  currentLoadIdle: 47.333333333333336,
  currentLoadIrq: 0,
  currentLoadSteal: 0,
  currentLoadGuest: 0,
  rawCurrentLoad: 2370,
  rawCurrentLoadUser: 1190,
  rawCurrentLoadSystem: 1180,
  rawCurrentLoadNice: 0,
  rawCurrentLoadIdle: 2130,
  rawCurrentLoadIrq: 0,
  rawCurrentLoadSteal: 0,
  rawCurrentLoadGuest: 0,
  cpus: [
    [Object], [Object],
    [Object], [Object],
    [Object], [Object],
    [Object], [Object],
    [Object], [Object]
  ]
}
```

## bluetooth

The current system bluetooth info.

Example:

```json
[
  {
    device: '',
    name: 'Master’s AirPods',
    manufacturer: 'Master’s',
    macDevice: '3c:12:73:a0:4b:64',
    macHost: 'bc:e0:73:04:70:f2',
    batteryPercent: null,
    type: 'Headset',
    connected: false
  },
  {
    device: '',
    name: 'WH-1000XM4',
    manufacturer: 'WH-1000XM4',
    macDevice: '94:cb:16:8d:34:17',
    macHost: 'bc:d1:74:05:71:f1',
    batteryPercent: null,
    type: 'Headset',
    connected: false
  },
  {
    device: '',
    name: 'x’s AirPods Pro',
    manufacturer: 'x’s',
    macDevice: '08:89:b7:34:b0:fc',
    macHost: 'bc:d9:34:14:70:e1',
    batteryPercent: null,
    type: 'Headset',
    connected: false
  }
]
```

