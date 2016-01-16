# MakeMe

This is a proof of concept app for creating exercise routines and virtual trainers.

It is a collaboration between [Valentina Pherson](https://github.com/VisValentina) and [Armand Aquino](https://github.com/apaquino)

Some technologies used are React-Native, Flux, React-Native-Router-Flux.

Designed only for iPhone 6 for now.

Still an early work in progress and more features and instructions to install will be added later.

// For profile
<ListView
  dataSource={dataSource}
  renderRow={this.renderCompletedRoutine}
  style={styles.listView}
  contentInset={{top: 64}}
/>

<View style={styles.childBottomArrows}>
  {showWeekId < MOCK_CALENDAR.length - 1 ? this.showButton("left") : <View />}
  <Text style={styles.childBottomDate}>{MOCK_CALENDAR[showWeekId]}</Text>
  {showWeekId != 0 ? this.showButton("right") : <View />}
</View>
