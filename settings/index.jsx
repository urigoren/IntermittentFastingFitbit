function IFConfig(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Intermittent Fasting Settings</Text>}>
        <Select
          label={`Feeding Start Time`}
          settingsKey="ifStart"
          options={[
            {name:"00:00",   value:"0"},
            {name:"00:30",   value:"0.5"},
            {name:"01:00",   value:"1"},
            {name:"01:30",   value:"1.5"},
            {name:"02:00",   value:"2"},
            {name:"02:30",   value:"2.5"},
            {name:"03:00",   value:"3"},
            {name:"03:30",   value:"3.5"},
            {name:"04:00",   value:"4"},
            {name:"04:30",   value:"4.5"},
            {name:"05:00",   value:"5"},
            {name:"05:30",   value:"5.5"},
            {name:"06:00",   value:"6"},
            {name:"06:30",   value:"6.5"},
            {name:"07:00",   value:"7"},
            {name:"07:30",   value:"7.5"},
            {name:"08:00",   value:"8"},
            {name:"08:30",   value:"8.5"},
            {name:"09:00",   value:"9"},
            {name:"09:30",   value:"9.5"},
            {name:"10:00",   value:"10"},
            {name:"10:30",   value:"10.5"},
            {name:"11:00",   value:"11"},
            {name:"11:30",   value:"11.5"},
            {name:"12:00",   value:"12"},
            {name:"12:30",   value:"12.5"},
            {name:"13:00",   value:"13"},
            {name:"13:30",   value:"13.5"},
            {name:"14:00",   value:"14"},
            {name:"14:30",   value:"14.5"},
            {name:"15:00",   value:"15"},
            {name:"15:30",   value:"15.5"},
            {name:"16:00",   value:"16"},
            {name:"16:30",   value:"16.5"},
            {name:"17:00",   value:"17"},
            {name:"17:30",   value:"17.5"},
            {name:"18:00",   value:"18"},
            {name:"18:30",   value:"18.5"},
            {name:"19:00",   value:"19"},
            {name:"19:30",   value:"19.5"},
            {name:"20:00",   value:"20"},
            {name:"20:30",   value:"20.5"},
            {name:"21:00",   value:"21"},
            {name:"21:30",   value:"21.5"},
            {name:"22:00",   value:"22"},
            {name:"22:30",   value:"22.5"},
            {name:"23:00",   value:"23"},
            {name:"23:30",   value:"23.5"}
          ]}
        />

        <Select
          label={`Feeding End Time`}
          settingsKey="ifEnd"
          options={[
            {name:"00:00",   value:"0"},
            {name:"00:30",   value:"0.5"},
            {name:"01:00",   value:"1"},
            {name:"01:30",   value:"1.5"},
            {name:"02:00",   value:"2"},
            {name:"02:30",   value:"2.5"},
            {name:"03:00",   value:"3"},
            {name:"03:30",   value:"3.5"},
            {name:"04:00",   value:"4"},
            {name:"04:30",   value:"4.5"},
            {name:"05:00",   value:"5"},
            {name:"05:30",   value:"5.5"},
            {name:"06:00",   value:"6"},
            {name:"06:30",   value:"6.5"},
            {name:"07:00",   value:"7"},
            {name:"07:30",   value:"7.5"},
            {name:"08:00",   value:"8"},
            {name:"08:30",   value:"8.5"},
            {name:"09:00",   value:"9"},
            {name:"09:30",   value:"9.5"},
            {name:"10:00",   value:"10"},
            {name:"10:30",   value:"10.5"},
            {name:"11:00",   value:"11"},
            {name:"11:30",   value:"11.5"},
            {name:"12:00",   value:"12"},
            {name:"12:30",   value:"12.5"},
            {name:"13:00",   value:"13"},
            {name:"13:30",   value:"13.5"},
            {name:"14:00",   value:"14"},
            {name:"14:30",   value:"14.5"},
            {name:"15:00",   value:"15"},
            {name:"15:30",   value:"15.5"},
            {name:"16:00",   value:"16"},
            {name:"16:30",   value:"16.5"},
            {name:"17:00",   value:"17"},
            {name:"17:30",   value:"17.5"},
            {name:"18:00",   value:"18"},
            {name:"18:30",   value:"18.5"},
            {name:"19:00",   value:"19"},
            {name:"19:30",   value:"19.5"},
            {name:"20:00",   value:"20"},
            {name:"20:30",   value:"20.5"},
            {name:"21:00",   value:"21"},
            {name:"21:30",   value:"21.5"},
            {name:"22:00",   value:"22"},
            {name:"22:30",   value:"22.5"},
            {name:"23:00",   value:"23"},
            {name:"23:30",   value:"23.5"}
          ]}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(IFConfig);
